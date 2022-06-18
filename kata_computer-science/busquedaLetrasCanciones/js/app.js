// Creación de variables
const d = document;
let $main_body = d.getElementById("main-body");
let $main_message = d.getElementById("main-message");
let $form_search = d.getElementById("form-search");
let $artistInput = d.getElementById("artistInput");
let $songInput = d.getElementById("songInput");

// Creación de funciones
const setText = (text) => {
  $main_message.innerText = text;
} 

// Consumo de la API
async function getSong(artist, song){
  try{
    setText("Cargando ...");
    $main_message.classList.remove("main-error");
    let response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    let data = response.data;
    setText(`Letra:\n\n${data.lyrics}`);
  }catch(e){
    $main_message.classList.add("main-error");
    setText("Canción no encontrada");
  }
}

// Creación de eventos
$form_search.addEventListener('click', (e)=>{
  e.preventDefault();
  $main_body.classList.add("main-body");
  let artist = $artistInput.value;
  let song = $songInput.value;
  getSong(artist, song);
});