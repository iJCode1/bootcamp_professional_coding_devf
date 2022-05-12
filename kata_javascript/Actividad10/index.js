/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
console.log("*************** Ejercicio 1 ***************");

const arr = [3,4,6,1,5,2,9,10,23,12];
const numbers = (array)=>{
  arr.sort((a,b) => a-b);
  console.log(`Segundo número más bajo: ${arr[1]}`);
  console.log(`Segundo número más alto: ${arr[arr.length-2]}`);
}
numbers(arr);

console.log("*******************************************");


/*
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/
console.log("*************** Ejercicio 2 ***************");

const coleccion = [
  {a: 11, b:224, name: "M48 Bulldog"},
  {a:23, b:56, name: "Object 140"},
  {a: 32, b:75, name: "T57 Heavy"}
];
const sum = (array)=>{
  let x = "";
  let message = array.map((elem) => elem.a + elem.b + ' ' + elem.name)
  return message.join('-=-');
}
console.log(`[${sum(coleccion)}]`);

console.log("*******************************************");


    /**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. 
  matriz = [7,2,5,4,6,3,5,3]
  arr = [7,2,5,3,5,3]

    Los números que faltan en arr son [4,6]

*/
console.log("*************** Ejercicio 3 ***************");

let matriz = [7,2,5,4,6,3,5,3];
let arr2 = [7,2,5,3,5,3];

const differences = (array1, array2) =>{
  let esDiferente = false;
  let numerosFaltantes = [];
  array1.forEach((el1) => {
    if(!(array2.includes(el1))){
      esDiferente = true;
      numerosFaltantes.push(el1);
    }
  });
  return (esDiferente) ? console.log(`Los números faltantes en el segundo arreglo son: [${numerosFaltantes}]`) : console.log(`Los 2 arreglos son iguales`);
}

differences(matriz, arr2);

console.log("*******************************************");