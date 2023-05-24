<?php
$host = 'localhost:3306';
$dbname = 'testlet';
$username = 'root';
$password = 'Barnhartg+21';

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
            echo "success";
        } else {
            echo "fail";
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
