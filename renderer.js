
const viewer = document.getElementById('viewer');
document.body.addEventListener('drop', evt => {
  evt.preventDefault();
  $(viewer).show();

  const file = evt.dataTransfer.files[0];
  const filePath = file.path;
  $("#viewer").show();
  $("#text").hide();
  document.getElementById("viewer").setAttribute("src", filePath);
}, false);
document.body.addEventListener('dragover', (e)=>{
  e.preventDefault();
  e.stopPropagation();
}, false);

