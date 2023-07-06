<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include("database.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


if (isset($data["item"]["id"])) {
    $subject = $data["item"]["id"];

    deleteCardSet($subject, $pdo);
} else {
    echo "missing data";
}
