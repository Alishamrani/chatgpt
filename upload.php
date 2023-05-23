<?php
$targetDir = 'uploads/';
$targetFile = $targetDir . basename($_FILES['dicomFile']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if the file is a DICOM file
if ($imageFileType != 'dcm') {
  echo 'Only DICOM files are allowed.';
  $uploadOk = 0;
}

// Move the uploaded file to the target directory
if ($uploadOk == 1 && move_uploaded_file($_FILES['dicomFile']['tmp_name'], $targetFile)) {
  echo 'File uploaded successfully.';
} else {
  echo 'File upload failed.';
}
?>
