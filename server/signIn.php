<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$email = $data["item"]["email"];
$password = $data["item"]["password"];



if (isset($email) && isset($password)) {

    $response = "success";

    echo $response;
}
