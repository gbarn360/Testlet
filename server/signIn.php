<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "database.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["email"]) && isset($data["item"]["password"])) {

    $email = $data["item"]["email"];
    $password = $data["item"]["password"];

    $user = new stdClass();
    $user->email = $email;
    $user->password = $password;



    signInUser($user, $pdo);
}
