<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include("database.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["subject"]) && isset($data["item"]["title"]) && isset($data["item"]["description"]) && isset($data["item"]["flashcards"]) &&  isset($data["item"]["token"])) {
    $subject = $data["item"]["subject"];
    $title = $data["item"]["title"];
    $description = $data["item"]["description"];
    $flashcards = $data["item"]["flashcards"];
    $token = $data["item"]["token"];
    $flashcardData = new stdClass();
    $flashcardData->subject = $subject;
    $flashcardData->title = $title;
    $flashcardData->description = $description;
    $flashcardData->flashcards = $flashcards;
    $flashcardData->token = $token;


    $subjectId = createFlashcardSet($flashcardData, $pdo);

    echo $subjectId;
}
