<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

include("database.php");


if (isset($data["item"]["token"])) {
    $token = $data["item"]["token"];

    $subjects = getSubjects($token, $pdo);
    echo json_encode($subjects);
}
