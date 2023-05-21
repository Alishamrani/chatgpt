var fileInput = document.getElementById("file-input");
var imageContainer = document.getElementById("image-container");
var reportContainer = document.getElementById("report-container");

fileInput.addEventListener("change", function() {
  var file = this.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var image = new Image();

      image.src = event.target.result;

      imageContainer.appendChild(image);
    };

    reader.readAsDataURL(file);
  }
});

var reportInput = document.getElementById("report-input");

reportInput.addEventListener("change", function() {
  var report = this.value;

  reportContainer.innerHTML = report;
});
