// ***************** Declaración de variables *****************
const d = document;
const $inicio_btn = d.getElementById('inicio');
const $jugador_1 = d.getElementById('jugador1');
const $jugador_2 = d.getElementById('jugador2');
const $jugador_3 = d.getElementById('jugador3');
let position1 = 0;
let position2 = 0;
let position3 = 0;

// ***************** Declaración de eventos *****************
$inicio_btn.addEventListener('click', ()=>{
  startRace();
  console.log('Se inicio el juego');
})

// ***************** Declaración de funciones *****************
const startRace = () =>{
  $inicio_btn.style.display = 'none';
  let interval = setInterval(()=>{
    if(position1 >=650){
      alert("Gano el Rojo!!!!");
      clearInterval(interval);
    }else if(position2 >= 650){
      alert("Gano el Azul!!!!");
      clearInterval(interval);
    }else if(position3 >= 650){
      alert("Gano el Amarillo!!!!");
      clearInterval(interval);
    }else{
      position1 += Math.round(Math.random() * 20)
      $jugador_1.style.left = `${position1}px`;
      position2 += Math.round(Math.random() * 20)
      $jugador_2.style.left = `${position2}px`;
      position3 += Math.round(Math.random() * 20)
      $jugador_3.style.left = `${position3}px`;
    }
  }, 150);
}