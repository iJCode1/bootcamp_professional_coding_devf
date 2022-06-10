/*
  Ejercicio 1.
  Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().
*/
console.log("*************** Ejercicio 1 ***************");

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
meses.forEach((mes, index)=>{
  console.log(`El mes '${index+1}' es: '${mes}'`);
});

console.log("*******************************************");

/*
  Ejercicio 2.
  Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
console.log("*************** Ejercicio 2 ***************");

const esParImpar = (n) => {
  return (n % 2 === 0) ? `El número ${n} es par` : `El número ${n} no es par`;
}
console.log(esParImpar(7)); // El número 7 no es par
console.log(esParImpar(82)); // El número 82 es par

console.log("*******************************************");

/*
  Ejercicio 3.
  Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
console.log("*************** Ejercicio 3 ***************");

const validarCadena = (cadena) =>{
  let cadenaArray = cadena.replace(/\s+/g, '').split('');
  let contadorMayus = 0;
  let contadorMinus = 0;
  let mensaje = "";

  cadenaArray.forEach((letra) =>{
    if(letra === letra.toUpperCase()){
      contadorMayus ++;
    }else if(letra === letra.toLowerCase()){
      contadorMinus ++;
    }
  })
  
  if(contadorMayus !== 0 && contadorMinus !== 0){
    mensaje = `La cadena '${cadena}' esta formada por Mayusculas y Minusculas`;
  }else if(contadorMayus === 0 && contadorMinus !== 0){
    mensaje = `La cadena '${cadena}' esta formada por puras Minusculas`;
  }else{
    mensaje = `La cadena '${cadena}' esta formada por puras Mayusculas`;
  }

  return mensaje;
}

console.log(validarCadena("Hola Mundo desde JS")); // La cadena 'Hola Mundo desde JS' esta formada por Mayusculas y Minusculas
console.log(validarCadena("hola mundo desde js")); // La cadena 'hola mundo desde js' esta formada por puras Minusculas
console.log(validarCadena("HOLA MUNDO DESDE JS")); // La cadena 'HOLA MUNDO DESDE JS' esta formada por puras Mayusculas

console.log("*******************************************");

/*
  Ejercicio 4.
  El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
  Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
*/
console.log("*************** Ejercicio 4 ***************");

const factorial = (n) =>{
  let suma = 1;
  for(let i = n; i >= 1; i-- ){
    suma *= i;
  }
  return suma;
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

console.log("*******************************************");

/*
  Ejercicio 5.
  Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
*/
console.log("*************** Ejercicio 5 ***************")

const esPalindromo = (cadena) =>{
  cadena = cadena.toLowerCase().replace(/\s+/g, '');
  cadenaAlReves = cadena.split('').reverse().join("");

  return (cadena === cadenaAlReves) ? "Es palindromo!" : "No es palindromo :(";
}

console.log(esPalindromo("Hola Mundo")); // No es palindromo :(
console.log(esPalindromo("La ruta nos aporto otro paso natural")); // Es palindromo!
console.log(esPalindromo("Ana")); // Es palindromo!

console.log("*******************************************");

/*
  Ejercicio 6.
  Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
*/
console.log("*************** Ejercicio 6 ***************")

const dados = () =>{
  let n1, n2;
  let suma = 0;
  let apariciones = {};
  for(let i = 0; i<36000; i++){
    n1 = Math.ceil(Math.random() * 6);
    n2 = Math.ceil(Math.random() * 6);
    suma = n1+n2;
    if(apariciones.hasOwnProperty(`${suma}`)){
      apariciones[`${suma}`] ++ ;
    }else{
      apariciones[`${suma}`] = 1 ;
    }
  }
  console.log(Object.entries(apariciones));
}

dados();
/*
  Ejemplo de salida:
  [
    [ '2', 961 ],   [ '3', 1952 ],
    [ '4', 2994 ],  [ '5', 3923 ],
    [ '6', 4921 ],  [ '7', 6099 ],
    [ '8', 4955 ],  [ '9', 4139 ],
    [ '10', 3046 ], [ '11', 1998 ],
    [ '12', 1012 ]
  ]
*/

console.log("*******************************************");