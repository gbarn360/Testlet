<?php
require 'vendor/autoload.php';

use Firebase\JWT\JWT;


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


include("database.php");
include("token.php");

function verifyPersonal($firstname, $lastname, $dob)
{
    $message = "";

    if (strlen($firstname) === 0) {
        $message .= "Must enter a first name! \n";
    }
    if (strlen($lastname) === 0) {
        $message .= "Must enter a last name \n";
    }
    if (strlen($dob) === "dob") {
        $message .= "Must enter a dob! \n";
    }

    return $message;
};

function verifyEmail($email)
{
    $emailMessage = "";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailMessage = "email not valid";
    }
    return $emailMessage;
}

function verifyPassword($password)
{
    $specialChars = '/[!@#$%^&*()-_+=[\]{};:\'"<>?,.]/';
    $uppercaseLetters = '/[A-Z]/';
    $lowercaseLetters = '/[a-z]/';
    $numbers = '/\d/';

    $passwordFormatMessage = "";

    if (strlen($password) < 8) {
        $passwordFormatMessage = "password must be at least 8 characters long!";
        return $passwordFormatMessage;
    }

    if (!preg_match($specialChars, $password)) {
        $passwordFormatMessage = "password must have at least 1 special character!";
        return $passwordFormatMessage;
    }

    if (!preg_match($uppercaseLetters, $password)) {
        $passwordFormatMessage = "password must have at least 1 uppercase character!";
        return $passwordFormatMessage;
    }

    if (!preg_match($lowercaseLetters, $password)) {
        $passwordFormatMessage = "password must have at least 1 lowercase character!";
        return $passwordFormatMessage;
    }

    if (!preg_match($numbers, $password)) {
        $passwordFormatMessage = "password must have at least 1 number!";
        return $passwordFormatMessage;
    }


    return $passwordFormatMessage;
}


if (isset($data["item"]["email"]) && isset($data["item"]["password"]) && isset($data["item"]["firstname"]) && isset($data["item"]["lastname"]) && isset($data["item"]["dob"])) {
    $email = $data["item"]["email"];
    $password = $data["item"]["password"];
    $firstname = $data["item"]["firstname"];
    $lastname = $data["item"]["lastname"];
    $dob = $data["item"]["dob"];



    $personalResp = verifyPersonal($firstname, $lastname, $dob);
    $emailResp = verifyEmail($email);
    $passwordResp = verifyPassword($password);

    $response = new stdClass();
    $response->status = "success";
    $issues = array();

    if ($personalResp != "") {
        $personal = new stdClass();
        $personal->personal = $personalResp;
        array_push($issues, $personal);
        $response->status = "fail";
    }
    if ($emailResp != "") {
        $email = new stdClass();
        $email->email = $emailResp;
        array_push($issues, $email);
        $response->status = "fail";
    }
    if ($passwordResp != "") {
        $password = new stdClass();
        $password->password = $passwordResp;
        array_push($issues, $password);
        $response->status = "fail";
    }


    if ($response->status == "success") {
        $user = new stdClass();
        $user->firstName = $firstname;
        $user->lastName = $lastname;
        $user->email = $email;
        $user->password = password_hash($password, PASSWORD_BCRYPT);
        $user->dob = $dob;

        $databaseResult = createUser($user, $pdo);
        if ($databaseResult == 'true') {
            $email = new stdClass();
            $email->email = "email already exists";
            array_push($issues, $email);
            $response->status = "fail";
        } else {
            $tokenContent = [
                'userId' => $databaseResult,
            ];
            $algorithm = 'HS256';
            $token = JWT::encode($tokenContent, $tokenKey, $algorithm);
            $response->token = $tokenContent;
        }
    }

    $response->issues = $issues;

    echo json_encode($response);
}
