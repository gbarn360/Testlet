<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include("database.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["name"]) && isset($data["item"]["token"])) {
    $subject = $data["item"]["name"];
    $token = $data["item"]["token"];

    createSubject($subject, $token, $pdo);
} else {
    echo "missing data";
}
