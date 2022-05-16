// ***************** Declaración de variables *****************
const d = document;
const $paragraph = d.getElementById('paragraph');
const $bigImage = d.getElementById('bigImage');
const $imgsContainer = d.getElementById('imgsContainer');

// ***************** Declaración de eventos *****************
$imgsContainer.addEventListener('click', (e)=>{
  if(e.target.name){
    $paragraph.textContent = e.target.name;
    $bigImage.setAttribute('src', e.target.src)
  }
})