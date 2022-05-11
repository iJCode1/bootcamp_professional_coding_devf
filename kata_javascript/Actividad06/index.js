/*
  Concatena los siguientes arreglos
  var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
  var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
*/
console.log("*************** Ejercicio 1 ***************");

let animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
let comingSoonAnimals = ['panter', 'dragon', 'turtle'];
let newArray = animals.concat(comingSoonAnimals);
console.log(`El array concatenado es: [${newArray}]`);

console.log("*******************************************");


/*
  Acomoda el arreglo de menor a mayor: var arr = [4, 6, 1, 0, 8, 2];
*/
console.log("*************** Ejercicio 2 ***************");

let arr = [4, 6, 1, 0, 8, 2];
arr.sort((a, b) => a - b );

console.log(`El arreglo ordenado es: [${arr}]`);

console.log("*******************************************");


/*
  Agrega un nuevo animal ('cow') al arreglo de animals
*/
console.log("*************** Ejercicio 3 ***************");

animals.push('cow');
console.log(`El arreglo 'animals' ahora es: ${animals}`);

console.log("*******************************************");


/*
  Retira el elemento 'eagle' del arreglo animals
*/
console.log("*************** Ejercicio 4 ***************");

animals.shift();
console.log(`El arreglo 'animals' ahora es: ${animals}`);

console.log("*******************************************");