<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

include("database.php");
$flashcardList = array();


if (isset($data["item"]["setId"])) {
    $flashcardSetId = $data["item"]["setId"];

    $flashcards = getFlashcards($flashcardSetId, $pdo);
    for ($i = 0; $i < sizeof($flashcards); $i++) {
        $flashcard = new stdClass();
        $flashcard->id = $flashcards[$i]["id"];
        $flashcard->term = $flashcards[$i]["term"];
        $flashcard->definition = $flashcards[$i]["def"];
        array_push($flashcardList, $flashcard);
    }
}
