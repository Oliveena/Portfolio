<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // data to be stored
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $date = date("Y-m-d H:i:s");

    // formatting the data
    $logEntry = "[$date] Name/Company: $name | Email: $email\n";

    // storing data in .txt
    $filePath = __DIR__ . "/downloads_log.txt";

    // appending data to .txt
    file_put_contents($filePath, $entry, FILE_APPEND | LOCK_EX);

    echo json_encode(["success" => true]);
    exit;
}
?>
