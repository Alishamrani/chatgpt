// script.js
// Upload DICOM File
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
      .then(result => {
        console.log(result);
        loadDICOMViewer(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // DICOM Viewer
  function loadDICOMViewer(filePath) {
    var element = document.getElementById('dicomViewer');
    cornerstone.enable(element);
  
    cornerstone.loadImage(filePath).then(image => {
      cornerstone.displayImage(element, image);
    });
  }
  
  // Add Report
  document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var reportText = document.getElementById('reportText').value;
    var dic
  })