/*
  Leer cap 2 del libro 'Eloquent JavaScript: Estructuras del programa'
*/
console.log("*************** Ejercicio 1 ***************");

let url_cap = 'https://eloquentjs-es.thedojo.mx/02_program_structure.html';

console.log("*******************************************");


/*
  Usando 'while', crea un programa que pregunte al usuario un número.
  Mostrar los números que son multiplos de 5 desde 1 hasta el número introducido por el usuario.
*/
console.log("*************** Ejercicio 2 ***************");

let number = Number(prompt('Ingresa un número'));
let i = 1;

if(number > 4){
  while(i <= number){
    if( i % 5 === 0){
      console.log(`El número '${i}' es multiplo de 5`);
    }
    i += 1;
  }
}else{
  console.log("Debes ingresar un número mayor a 4");
}

console.log("*******************************************");


/*
  Crea el mismo ejercicio 2, ahora usando 'Do while'
*/
console.log("*************** Ejercicio 3 ***************");

let number2 = Number(prompt("Ingresa un número"));
let j = 1;

if(number2 >= 5){
  do{
    if(j % 5 === 0){
      console.log(`El número '${j}' es multiplo de 5`);
    }
    j += 1;
  }while(j <= number2);
}else{
  console.log("Debes ingresar un número mayor a 4");
}

console.log("*******************************************");


/*
  Usando 'for', crea un programa que imprima en consola los números impares del 1 al 50
*/
console.log("*************** Ejercicio 4 ***************");

let count = 0;
for(let i = 1; i<=50; i++){
  if(i % 2 !== 0){
    count ++;
    console.log(`El número ${i} es impar`);
  }
}
console.log(`Hay '${count}' números impares del 1 al 50`);

console.log("*******************************************");