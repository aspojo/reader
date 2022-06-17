
const viewer = document.getElementById('viewer');
document.body.addEventListener('drop', evt => {
  evt.preventDefault();
  $(viewer).show();

  const file = evt.dataTransfer.files[0];
  const filePath = file.path;
  $("#viewer").show();
  document.getElementById("viewer").setAttribute("src", filePath);

  //window.open(filePath, '_blank', 'top=width,height=200,frame=false,nodeIntegration=no')

}, false);
document.body.addEventListener('dragover', (e)=>{
  e.preventDefault();
  e.stopPropagation();
  $(viewer).hide();
}, false);

