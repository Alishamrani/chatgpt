// script.js
document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var dicomFile = document.getElementById('dicomFile').files[0];
    uploadDICOMFile(dicomFile);
  });
  
  function uploadDICOMFile(dicomFile) {
    var formData = new FormData();
    formData.append('dicomFile', dicomFile);
    
    fetch('upload.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // Process the response from the server
    })
    .catch(error => {
      console.error(error);
      // Handle any errors that occur during the file upload
    });
  }
  
  // DICOM Viewer
  document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('dicomViewer');
    cornerstone.enable(element);
  });
  
  // Add Report
  document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var reportText = document.getElementById('reportText').value;
    
    // Send the report data to the server
    fetch('add_report.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reportText: reportText })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // Process the response from the server
    })
    .catch(error => {
      console.error(error);
      // Handle any errors that occur during report submission
    });
  });
  