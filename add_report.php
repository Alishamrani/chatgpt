<?php
$requestPayload = file_get_contents('php://input');
$data = json_decode($requestPayload, true);

$reportText = $data['reportText'];

// Process the report data, e.g., store it in a database

echo 'Report added successfully.';
?>
