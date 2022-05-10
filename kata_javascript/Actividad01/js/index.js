/*
  Ejercicio 1:
  En la consola del navegador, crea un programa que le pida al usuario que ingrese
  un número, multiplica ese número por 2 y muestra en salida el resultado de esa operación.
*/
console.log("*************** Ejercicio 1 ***************");

let number = Number(prompt("Ingresa un número"));
let multiplication = number * 2;
console.log(`La multiplicación de ${number} * 2 = ${multiplication}`);

console.log("*******************************************");


/*
  Ejercicio 2:
  En la consola del navegador escribe un programa que reciba 2 números e imprime en pantalla
  la resta de ambos.  
*/
console.log("*************** Ejercicio 2 ***************");

let number1 = Number(prompt("Ingresa un número"));
let number2 = Number(prompt("Ingresa otro número"));
let substract = number1 - number2;
console.log(`La resta de ${number1} - ${number2} = ${substract}`);

console.log("*******************************************");


/*
  Ejercicio 3:
  Escribe un programa que calcule el área de un circulo con un radio r = 5.3 
  Imprime el área en pantalla. (Fórmula: a = pi * r^2)
*/
console.log("*************** Ejercicio 3 ***************");

let radio = 5.3;
let area = Math.PI * Math.pow(radio, 2);
console.log(`El área del ciculo con un radio de ${radio} es de: ${area.toFixed(2)}`);

console.log("*******************************************");

/*
  Ejercicio 4:
  Escribe un programa que calcule el área de un rombo, sabiendo que D = 8cm y d = 6cm
  (Fórmula: a = D * d/2)
*/
console.log("*************** Ejercicio 4 ***************");

let D = 8;
let d = 6;
let area2 = D * d/2;
console.log(`El área del rombo es de: ${area2.toFixed(2)}`);

console.log("*******************************************");