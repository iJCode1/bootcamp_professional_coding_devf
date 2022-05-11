/*
  Solicitar al usuario un número y determinar si es divisible entre dos o no.
  Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x número no es divisible entre 2"
*/
console.log("*************** Ejercicio 1 ***************");

let number = Number(prompt('Ingresa un número'));
if(number % 2 === 0){
  console.log(`El número ${number} es divisible entre dos`);
}else{
  console.log(`El número '${number}' no es divisible entre dos`);
}

console.log("*******************************************");


/*
  Crear un programa que determine si un número introducido en un pront es par o no.
  La respuesta será mostrada en un alert
*/
console.log("*************** Ejercicio 2 ***************");

let number2 = Number(prompt("Introduce un número"));
if(number2 % 2 === 0){
  alert(`El número ${number2} es par`);
}else{
  alert(`El número ${number2} no es par`);
}

console.log("*******************************************");


/*
  Solicitar al usuario un número. Si el número es 1000, imprimir "Ganaste un premio", en caso
  contario, mostrar el número y el mensaje "Lo sentimos, sigue participando"
*/
console.log("*************** Ejercicio 3 ***************");

let number3 = Number(prompt("Ingresa un número"));
if(number3 === 1000){
  console.log(`Numero introducido: '${number3}' - Ganaste un premio`);
}else{
  console.log(`Numero introducido: '${number3}' - Lo sentimos, sigue participando`);
}

console.log("*******************************************");


/*
  Solicitar al usuario que ingrese dos números y mostrar cúal de los dos es menor.
  No considerar el caso en que ambos números son iguales.
*/
console.log("*************** Ejercicio 4 ***************");

let n1 = Number(prompt("Ingresa el primer número"));
let n2 = Number(prompt("Ingresa el segundo número"));
if(n1 > n2){
  console.log(`'${n2}' es menor que '${n1}'`);
}else{
  console.log(`'${n1}' es menor que '${n2}'`);
}

console.log("*******************************************");


/*
  Solicitar al usuario que ingrese tres números y mostrar cual de los tres es el número mayor.
  Considerar el caso en que 2 números sean iguales
*/

console.log("*************** Ejercicio 5 ***************");

let n_1 = Number(prompt("Ingresa el primero número"));
let n_2 = Number(prompt("Ingresa el segundo número"));
let n_3 = Number(prompt("Ingresa el tercer número"));
const array = [n_1, n_2, n_3];

let repetido = false;
let num, numRepetido;

array.sort((a,b) => a-b);

array.forEach((el) => {
  if(el === num){
    repetido = true;
    numRepetido = el
  }
  num = el;
})

if(repetido){
  console.log(`Hay un número repetido el cual es: ${numRepetido} y el número maximo es: ${Math.max(...array)}`);
}else{
  console.log(`El número maximo es: ${Math.max(...array)}`);
}

console.log("*******************************************");


/*
  Con ayuda de la función prompt, pedir dos datos al usuario: Nombre y edad
  Para luego imprimir en pantalla el siguiente resultado

  - si el usuario tiene edad de 18 o mayor puede ingresar a la discoteca
  - si el usuario es menor de 18 no puede ingresar a la discoteca
  - si el usuario tiene edad de 18 o mayor y a parte se llama Carlos o Mario, puede ingresar a VIP
*/
console.log("*************** Ejercicio 6 ***************");

let age = Number(prompt("Ingresa tu edad"));
let namee = prompt("Ingresa tu nombre").toLocaleLowerCase();

if(age >= 18){
  if( ( namee === 'carlos' ) || ( namee === 'mario' ) ){
    console.log(`Bienvenido ${namee} con tus ${age} años puedes acceder a la zona VIP`);
  }else{
    console.log(`Bienvenido ${namee} con tus ${age} años puedes acceder a la Discoteca`);
  }
}else{
  console.log(`Lo sentimos, con ${age} años eres menor de edad y no puedes acceder a la discoteca`);
}

console.log("*******************************************");