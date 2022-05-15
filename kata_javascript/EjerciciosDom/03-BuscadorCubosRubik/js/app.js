/**************** Declaración de Variables ****************/
const d = document;
const $rubiksForm = d.getElementById('rubiksForm');
const $inputName = d.getElementById('inputName');
const $inputCategory = d.getElementById('inputCategory');
const $inputBrand = d.getElementById('inputBrand');
const $mainCards = d.getElementById('mainCards');
const $mainContainer = d.getElementById('mainContainer');
const searchData = {
  nombre: '',
  categoria: '',
  marca: '',
}

/**************** Eventos ****************/
d.addEventListener('DOMContentLoaded', () => {
  showElements(cubes);
});

$rubiksForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  cleanMessages();

  searchData.nombre = $inputName.value.toLowerCase();
  searchData.categoria = $inputCategory.value;
  searchData.marca = $inputBrand.value;

  cubesFilter();
  $rubiksForm.reset()
})


/**************** Funciones ****************/
const showElements = (cubes) => {
  cubes.forEach((cube) => {
    let mainCard = d.createElement('div');
    mainCard.classList.add('col-12', 'col-lg-6', 'py-2', 'd-flex');
    mainCard.innerHTML = `
    <div class="card d-flex flex-md-row align-items-center gap-3 p-3">
      <div class="card-image w-50">
        <img src='${cube.imagen}' class="img-fluid object-fit" alt="Imagen del cubo rubik" width="300">
      </div>
      <div class="card-body w-50">
        <h4 class="card-title text-capitalize">${cube.nombre}</h4>
        <p class="card-description"><b>Categoría:</b> ${cube.categoria}</p>
        <p class="card-description"><b>Marca:</b> ${cube.marca}</p>
        <p class="card-description">${cube.descripcion}</p>
        <h5 class="card-price"><b>Precio:</b> $${cube.precio}MXN</h5>
      </div>
    </div>
    `;
    $mainCards.appendChild(mainCard);
  });
}

const cubesFilter = () =>{
  cleanHTML();
  const existContent = Object.values(searchData).filter((e) => e);
  const result = cubes.filter( nameFilter ).filter( categoryFilter ).filter( brandFilter );
  if(existContent.length === 0){
    showMessage('Tienes que especificar tú busqueda');
  }else if( result.length){
    showElements(result);
  }else{
    showMessage('No se encontrarón coincidencias con la BD');
  }  
}

const nameFilter = (cube) =>{
  const {nombre} = searchData; // Nombre que ingreso el usuario
  if(nombre){
    return cube.nombre.toLowerCase() === nombre;
  } 
  return cube;
}

const categoryFilter = (cube) =>{
  const {categoria} = searchData; // Categoría que selecciono el usuario
  if(categoria){
    return cube.categoria === categoria;
  } 
  return cube;
}

const brandFilter = (cube) =>{
  const {marca} = searchData; // Marca que selecciono el usuario
  if(marca){
    return cube.marca === marca;
  } 
  return cube;
}

const cleanHTML = () =>{
  $mainCards.innerHTML = '';
}

const showMessage = (mensaje) =>{
  cleanHTML();
  let message = d.createElement('div');
  message.classList.add('mainMessage', 'bg-danger', 'text-white', 'p-4', 'text-center', 'm-2');
  message.textContent = mensaje;
  $mainCards.parentElement.appendChild(message);
}

const cleanMessages = ()=>{
  const messages = d.getElementsByClassName('mainMessage');
  let messagesArray = Array.from(messages);
  messagesArray.forEach((message) => {
    $mainContainer.removeChild(message);
  })
}