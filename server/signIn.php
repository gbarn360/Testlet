<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php';

use Firebase\JWT\JWT;

include "database.php";
include "token.php";

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$response = new stdClass();


if (isset($data["item"]["email"]) && isset($data["item"]["password"])) {

    $email = $data["item"]["email"];
    $password = $data["item"]["password"];

    $user = new stdClass();
    $user->email = $email;
    $user->password = $password;

    $userId = signInUser($user, $pdo);

    if ($userId) {
        $tokenContent = [
            'userId' => $userId,
        ];
        $algorithm = 'HS256';
        $token = JWT::encode($tokenContent, $tokenKey, $algorithm);

        $response->status = "success";
        $response->token = $tokenContent;
    } else {
        $response->status = "false";
    }
    echo json_encode($response);
}
