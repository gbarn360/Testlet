<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

include("database.php");


if (isset($data["item"]["setId"])) {
    $flashcardSetId = $data["item"]["setId"];

    $flashcards = getFlashcards($flashcardSetId, $pdo);

    echo json_encode($flashcards);
}
