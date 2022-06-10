/*
  En este ejercicio, se recibirá el nombre de equipo e integrantes como parámetros de la función,
  formar el siguiente mensaje en la consola con estos datos de entrada:

  Datos de entrada:
  teamName: 'formacion'
  people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'], 

  Resultado:
  Hay 6 personas en el equipo de formacion.
  Ellos son: Amalia, Karla, Silvana, Manu, Jonh, Mike.
*/
console.log("************** Ejercicio 1 **************");

let teamName = 'formacion';
const people = [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'];

const mostrarEquipo = (nombre, equipo) => {
  let mensaje = ``;
  mensaje += `Hay ${people.length} personas en el equipo de ${nombre}.\n`;
  mensaje += "Ellos son:"
  equipo.forEach((integrante, index) => {
    (index != equipo.length -1 ) ? mensaje += `${integrante}, ` : mensaje += `${integrante}`;
  });
  return mensaje;
}

console.log(mostrarEquipo(teamName, people));

console.log("*****************************************");


/*
  Pasar el siguiente ejercicio de ES6 a ES5.
  const word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

  const capitalize = str => {
    let newStr = str.split(" ");
    let result = [];
      newStr.forEach(palabra=> {
        let primerLetra = palabra.charAt(0).toUpperCase();
        let mediaPalabra = palabra.slice(1, palabra.length);
        result.push(primerLetra + mediaPalabra);
      });
      console.log(result.join(" "));
    };	

  capitalize(word);
*/
console.log("************** Ejercicio 2 **************");

var word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

function capitalize(str){
  var newStr = str.split(" ");
  var result = [];

  newStr.forEach(function(palabra){
    var primerLetra = palabra.charAt(0).toUpperCase();
    var mediaPalabra = palabra.slice(1, palabra.length);
    result.push(primerLetra + mediaPalabra);
  });
  console.log(result.join(" "));
}

capitalize(word);

console.log("*****************************************");

/*
  Implementar una función que compare la contraseña que el usuario ingrese desde un prompt
  con una contraseña guardada en una variable.
  ('si no ingresa ninguna contraseña, debe mostrar en consola falso'),
  ('si ingresa una contraseña errónea, debe mostrar en consola falso'),
  ('si ingresa la contraseña correcta como contraseña, debe mostrar en consola verdadero'),
  Resolver usando una funcion arrow
*/

console.log("************** Ejercicio 3 **************");

let contraseña = "gatito12";
const compararContraseña = contraseña =>{
  let passwordUser = prompt("Ingrese su contraseña").trim();

  if(passwordUser === '' || passwordUser != contraseña){
    console.log("falso");
  }else{
    console.log("verdadero")
  }
}
compararContraseña(contraseña);

console.log("*****************************************");


console.log("************** Ejercicio 4 **************");

function mascota (tipo, nombre, color, edad){
  this.tipo = tipo;
  this.nombre = nombre;
  this.color = color;
  this.edad = edad;
}

mascota.prototype.datosMascota = function(){
    return `Hola, soy un ${this.tipo}, me llamo ${this.nombre}, tengo ${this.edad} y soy de color ${this.color}`
}

let perro = new mascota ("perro", "willy", "gris", "2 meses");
let gato = new mascota ("gato", "michi", "amarillo", "1 año");

console.log(perro.datosMascota());
console.log(gato.datosMascota());

console.log("*****************************************");
