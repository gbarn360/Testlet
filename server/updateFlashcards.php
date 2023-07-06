<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

include("database.php");


if (isset($data["item"]["flashcards"]) && isset($data["item"]["setId"])) {
    $flashcards = $data["item"]["flashcards"];
    $setId = $data["item"]["setId"];
    $cardsToDelete = $data["item"]["deleteCards"];

    $flashcardList = array();
    for ($i = 0; $i < sizeof($flashcards); $i++) {
        array_push($flashcardList, $flashcards[$i]);
    }
    deleteCards($cardsToDelete, $pdo);
    updateFlashcards($flashcardList, $setId, $pdo);
}
