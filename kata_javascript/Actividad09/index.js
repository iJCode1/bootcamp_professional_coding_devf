// Ejercicios de Objetos y sus métodos básicos:


/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
console.log("*************** Ejercicio 1 ***************");

let student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ['Sky', 'football', 'walking my dog']
};
console.log(`El nombre es: ${student.name}`);
console.log(`La edad es: ${student['age']}`);
student.name = "Steve Jobs";
console.log(`El nuevo nombre es: ${student.name}`);

console.log("*******************************************");


/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 */
console.log("*************** Ejercicio 2 ***************");

let student2 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(`El objeto 'student2' tiene las siguientes propiedades: [${Object.keys(student2)}]`);

console.log("*******************************************");


/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
console.log("*************** Ejercicio 3 ***************");

let student3 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
let keys = Object.keys(student3);
if(keys.includes("name")){
  console.log(`El objeto 'student3' si contiene la propiedad 'name'`);
}else{
  console.log(`El objeto 'student3' no contiene la propiedad 'name'`);
}

console.log("*******************************************");


/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
console.log("*************** Ejercicio 4 ***************");

let student4 = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log("Objeto antes de eliminar la propiedad 'rollno'",student4);
delete student4.rollno;
console.log("Objeto despues de eliminar la propiedad 'rollno'",student4);

console.log("*******************************************");


/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 * 
    * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
La nueva edad debe ser 35.
 */ 
console.log("*************** Ejercicio 5 ***************");

let student5 = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ['Sky', 'football', 'walking my dog']
};
let property = Object.keys(student5);
student5[`${property[1]}`] = 35;
console.log(`El objeto ya actualizado es:`,student5);

console.log("*******************************************");


/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 * var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
console.log("*************** Ejercicio 6 ***************");

let student6 = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ['Sky', 'football', 'walking my dog']
};
student6.pet = 'cat';
console.log(`El objeto con la nueva propiedad es:`,student6);

console.log("*******************************************");


/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
console.log("*************** Ejercicio 7 ***************");

const objeto = {};
Object.defineProperties(objeto, {
  color: {
    value: 'Purpura',
    enumerable: true
  },
  tamaño: {
    value: 18,
    enumerable: true
  },
  peso: {
    value: 80,
    enumerable: true
  },
  cantidad: {
    value: 7,
    enumerable: true
  },
})
console.log(`El objeto con las nuevas propiedades es: `,objeto);

console.log("*******************************************");