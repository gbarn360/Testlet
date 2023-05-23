<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["name"])) {
    $subject = $data["item"]["name"];

    echo "{$subject} has been recieved by server";
}
