// Creación de variables
const API = "d42d92a5d116586bd15a40659ed04ece";
let pathImage = "https://image.tmdb.org/t/p/original";
const $popular_images = document.getElementById("popular-images");

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
      $image.setAttribute("class", "popular-image");
      $image.setAttribute("src", `${pathImage}${data.results[i].poster_path}`);
      $popular_images.appendChild($image);
    }
  }catch(e){
    console.error(e);
  }
}

// Creación de eventos
getPopularMovies();

