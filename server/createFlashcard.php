<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["subject"]) && isset($data["item"]["title"]) && isset($data["item"]["description"]) && isset($data["item"]["flashcards"])) {
    $subject = $data["item"]["subject"];
    $title = $data["item"]["title"];
    $description = $data["item"]["description"];
    $flashcards = $data["item"]["flashcards"];

    $reponse = print_r($flashcards);

    echo "recieved flashcards on server :{$response} ";
}
