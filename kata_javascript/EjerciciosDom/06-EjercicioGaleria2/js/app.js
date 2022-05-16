// ************** Declaración de variables **************
const d = document;
const $image = d.querySelector('#image')
const $buttons = d.querySelector('#buttons');
const $title = d.querySelector('#title');
const $paragraph = d.querySelector('#paragraph');

// ************** Declaración de funciones **************
const showData = (array, button) =>{
  array.forEach((flor) =>{
    if(flor.idFlor.toString() == button){
      $image.setAttribute('src', flor.imagen);
      $title.textContent = flor.titulo;
      $paragraph.textContent = flor.descripcion;
    }
  })
}

// ************** Declaración de eventos **************
$buttons.addEventListener('click', (e)=>{
  showData(flores, e.target.textContent)
})