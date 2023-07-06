<?php
$host = 'localhost:3306';
$dbname = 'testlet';
$username = 'root';
$password = 'Barnhartg+21';

function deleteCardSet($flashcardSetId, $pdo)
{
    $query = "DELETE FROM flashcards WHERE flashcardSetId = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $flashcardSetId);
    $stmt->execute();

    $query = "DELETE FROM flashcardsets WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $flashcardSetId);
    $stmt->execute();
}


function deleteSubject($subjectId, $pdo)
{
    $query = "SELECT id FROM flashcardsets WHERE subjectId = :subjectId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":subjectId", $subjectId);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    for ($i = 0; $i < sizeof($rows); $i++) {
        $query = "DELETE FROM flashcards WHERE flashcardSetId = :id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":id", $rows[$i]["id"]);
        $stmt->execute();
    }
    $query = "DELETE FROM flashcardsets WHERE subjectId = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $subjectId);
    $stmt->execute();
    $query = "DELETE FROM subjects WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $subjectId);
    $stmt->execute();
}

function deleteCards($cards, $pdo)
{
    for ($i = 0; $i < sizeof($cards); $i++) {
        $query = "DELETE FROM flashcards WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":id", $cards[$i]["id"]);
        $stmt->execute();
    }
}


function updateFlashcards($flashcards, $setId, $pdo)
{
    for ($i = 0; $i < sizeof($flashcards); $i++) {
        if ($flashcards[$i]["id"] == null) {
            $query = "INSERT INTO flashcards(flashcardSetId,term,def) VALUES(:setId,:term,:def)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(":setId", $setId);
            $stmt->bindParam(":term", $flashcards[$i]["term"]);
            $stmt->bindParam(":def", $flashcards[$i]["def"]);
            $stmt->execute();
            continue;
        }
        $query = "UPDATE flashcards SET term = :term,def=:def WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":term", $flashcards[$i]["term"]);
        $stmt->bindParam(":def", $flashcards[$i]["def"]);
        $stmt->bindParam(":id", $flashcards[$i]["id"]);
        $stmt->execute();
    }
}

function getFlashcards($flashcardSetId, $pdo)
{
    $query = "SELECT * FROM flashcards WHERE flashcardSetId = :flashcardSetId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":flashcardSetId", $flashcardSetId);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $rows;
}

function getFlashcardSets($subjectId, $pdo)
{
    $query = "SELECT * FROM flashcardsets WHERE subjectId = :subjectId";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":subjectId", $subjectId);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
}

function getSubjects($token, $pdo)
{
    $query = "SELECT * FROM subjects WHERE userId = $token";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $rows;
}

function createFlashcard($flashcardSetId, $term, $definition, $pdo)
{
    $query = "INSERT INTO flashcards(flashcardSetId,term,def) VALUES(:flashcardSetId,:term,:def)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":flashcardSetId", $flashcardSetId);
    $stmt->bindParam(":term", $term);
    $stmt->bindParam(":def", $definition);
    $stmt->execute();
}


function createFlashcardSet($flashcardData, $pdo)
{

    $query = "SELECT id FROM subjects WHERE userId = :userId AND subjectName = :subjectName";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":userId", $flashcardData->token);
    $stmt->bindParam(":subjectName", $flashcardData->subject);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);


    if ($row == false) {
        createSubject($flashcardData->subject, $flashcardData->token, $pdo);
        createFlashcardSet($flashcardData, $pdo);
    } else {
        $query = "INSERT INTO flashcardsets(subjectId,flashcardTitle,flashcardDescription) VALUES(:subjectId,:flashcardTitle,:flashcardDescription)";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":subjectId", $row["id"]);
        $stmt->bindParam(":flashcardTitle", $flashcardData->title);
        $stmt->bindParam(":flashcardDescription", $flashcardData->description);
        $stmt->execute();

        $query = "SELECT id FROM flashcardsets WHERE subjectId = :subjectId and flashcardTitle = :flashcardTitle";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":subjectId", $row["id"]);
        $stmt->bindParam(":flashcardTitle", $flashcardData->title);
        $stmt->execute();

        $flashcardSetId = $stmt->fetch(PDO::FETCH_ASSOC);

        for ($i = 0; $i < sizeof($flashcardData->flashcards); $i++) {
            createFlashcard($flashcardSetId["id"], $flashcardData->flashcards[$i]["term"], $flashcardData->flashcards[$i]["definition"], $pdo);
        }
        return $row["id"];
    }
}
function createSubject($subject, $token, $pdo)
{
    $query = "INSERT INTO subjects(userId,subjectName) VALUES($token,:subjectName)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":subjectName", $subject);
    $stmt->execute();
    try {
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

function createUser($userInfo, $pdo)
{
    try {

        $query = "SELECT * FROM Users WHERE userEmail = :userEmail";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':userEmail', $userInfo->email);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);


        if ($row) {
            return true;
        } else {

            $query = "INSERT INTO Users (firstName, lastName, userEmail, userPassword,dob)
                VALUES (:firstName, :lastName, :userEmail, :userPassword, :dob)";

            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':firstName', $userInfo->firstName);
            $stmt->bindParam(':lastName', $userInfo->lastName);
            $stmt->bindParam(':userEmail', $userInfo->email);
            $stmt->bindParam(':userPassword', $userInfo->password);
            $stmt->bindParam(':dob', $userInfo->dob);

            $stmt->execute();

            $query = "SELECT id FROM Users WHERE userEmail = :userEmail";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':userEmail', $userInfo->email);
            $stmt->execute();
            $userId = $stmt->fetch(PDO::FETCH_ASSOC);

            return $userId;
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

function signInUser($userInfo, $pdo)
{
    try {
        $query = "SELECT * FROM Users WHERE userEmail = :userEmail";

        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':userEmail', $userInfo->email);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);


        if ($row && password_verify($userInfo->password, $row["userPassword"])) {
            return $row["id"];
        } else {
            return false;
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}






try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
