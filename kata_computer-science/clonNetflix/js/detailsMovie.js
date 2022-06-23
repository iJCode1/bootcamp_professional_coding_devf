// Creación de variables
const API = "f933eabe2aa4d06a047606d9a76e9e88";
let pathImage = "https://image.tmdb.org/t/p/original";
const $detail_image = document.getElementById("detail-image");

const $detail_title = document.getElementById("detail-title");
const $detail_overview = document.getElementById("detail-overview");
const $detail_vote = document.getElementById("detail-vote");
const $detail_runtime = document.getElementById("detail-runtime");
const $detail_genres = document.getElementById("detail-genres");
const $detail_actors = document.getElementById("detail-actors");

// Creación de funciones
export default async function getInfoMovie(){
  const params = window.location.search;
  const urlParams = new URLSearchParams(params);

  var id = urlParams.get('id');

  try{
    let movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}&language=es-MX`);
    let dataMovie = movie.data;
    
    let credits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API}&language=en-US`);
    let dataCredits = credits.data.cast;
    
    // Prueba
    let actor = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=James%20Marsden&with_watch_monetization_types=flatrate`);
    let dataActor = actor.data.cast;
    console.log("Actor", dataActor);


    const dataFilter = dataCredits.filter(actor => actor.known_for_department === "Acting"); // Filtramos por Actor
    const firstActors = [];

    for (let i = 0; i < 5; i++) {
      firstActors.push(dataFilter[i].name);
    }
    $detail_image.style.backgroundImage = `url(${pathImage}${dataMovie.backdrop_path})`;
    $detail_title.textContent = dataMovie.title;
    $detail_overview.textContent = dataMovie.overview;
    $detail_vote.innerHTML = `Calificación: <span class="is-yellow">★</span><span class="is-gray">${dataMovie.vote_average}</span>`;
    $detail_runtime.innerHTML = `Duración: <span class="is-gray">${dataMovie.runtime} minutos</span>`;
    
    $detail_genres.textContent = `Géneros: `;
    for(let i=0; i<dataMovie.genres.length; i++){
      console.log(dataMovie.genres[i].name);
      if(i < dataMovie.genres.length - 1){
        $detail_genres.innerHTML += `<span class="is-gray">${dataMovie.genres[i].name}, </span>`;
      }else{
        $detail_genres.innerHTML += `<span class="is-gray">${dataMovie.genres[i].name}.</span>`;
      }
    } 

    $detail_actors.textContent = "Actores: ";
    for (let i = 0; i < firstActors.length; i++) {
      let $genresLink = document.createElement("a");
      $genresLink.textContent = "Actores: ";
      $genresLink.setAttribute("href", "#");
      $genresLink.setAttribute("class", "detail-link");
      if(i < dataMovie.genres.length - 1){
        $genresLink.innerHTML = `<span class="is-gray">${firstActors[i]},</span> `;
      }else{
        $genresLink.innerHTML = `<span class="is-gray">${firstActors[i]}.</span> `
      }
      $detail_actors.appendChild($genresLink);
    }

    console.log(firstActors);

  }catch(e){
    console.error(e);
  }
}

getInfoMovie();

export { getInfoMovie };

// Creación de eventos