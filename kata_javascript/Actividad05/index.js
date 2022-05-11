/*
  Construye un código bajo las siguientes reglas
    - Itera arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0] * Utilizando un ciclo for
    - Imprime en consola los valores que sean mayores a 3
*/
console.log("*************** Ejercicio 1 ***************");

let arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for(let i = 0; i<arreglo.length; i++){
  if(arreglo[i] > 3){
    console.log(`El valor del arreglo en la posición '${i}' es '${arreglo[i]}', el cual es mayor a 3`);
  }
}

console.log("*******************************************");


/*
  Construye un código bajo las siguientes reglas
    - Declara un arreglo vacío * Con un ciclo while que se ejecute 5 veces, agrega
    los elementos al array
*/
console.log("*************** Ejercicio 2 ***************");

let array = [];
let i = 1;

while( i<=5 ){
  array.push(i)
  i +=1;
}
console.log(`El array es: [${array}]`);

console.log("*******************************************");
