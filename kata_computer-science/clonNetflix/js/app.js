// Importaciones
// import getInfoMovie from './detailsMovie.js';

// Creación de variables
const API = "f933eabe2aa4d06a047606d9a76e9e88";
let pathImage = "https://image.tmdb.org/t/p/original";
const $popular_images = document.getElementById("popular-images");
const $thriller_images = document.getElementById("thriller-images");
const $romance_images = document.getElementById("romance-images");
const $fiction_images = document.getElementById("fiction-images");

// Creación de funciones
async function getPopularMovies(){
  try{
    let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`);
    let data = response.data;
    for(let i = 0; i<data.results.length; i++){
      let $image = document.createElement("img");
      $image.setAttribute("alt", `Poster de la pelicula ${data.results[i].title}`);
      $image.setAttribute("width", "221");
      $image.setAttribute("height", "124");
      $image.setAttribute("id", data.results[i].id);
      $image.setAttribute("class", "popular-image");
      $image.setAttribute("src", `${pathImage}${data.results[i].poster_path}`);
      $popular_images.appendChild($image);
    }
  }catch(e){
    console.error(e);
  }
}

async function getGenresMovies(id, section){
  try{
    let response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`);
    let data = response.data;
    for(let i = 0; i<15; i++){
      let $image = document.createElement("img");
      $image.setAttribute("alt", `Poster de la pelicula ${data.results[i].title}`);
      $image.setAttribute("width", "221");
      $image.setAttribute("height", "124");
      $image.setAttribute("id", data.results[i].id);
      $image.setAttribute("class", "genre-image");
      $image.setAttribute("src", `${pathImage}${data.results[i].poster_path}`);
      section.appendChild($image);
    }
  }catch(e){
    console.error(e);
  }
}

// Creación de eventos
document.addEventListener("click", (e)=>{
  if(e.target.classList[0] === "genre-image" || e.target.classList[0] === "popular-image"){
    let id = e.target.getAttribute("id");
    window.location.href = `./detailsMovie.html?id=${id}`;
  }
});

getPopularMovies();
getGenresMovies(27, $thriller_images);
getGenresMovies(10749, $romance_images);
getGenresMovies(878, $fiction_images);