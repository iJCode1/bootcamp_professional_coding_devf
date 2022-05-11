/*
  Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
  Retorna true o false en caso de que una oración contenga una palabra dada, es decir,
  si yo mando "Hola Mundo" y mando la palabra a buscar "perro", me debe retornar un false.
  En cambio, si mando "mundo", entonces debe retornar true
*/
console.log("*************** Ejercicio 1 ***************");

const findWord = (sentence, word) =>{
  if(sentence.toLowerCase().includes(word.toLowerCase())){
    return console.log(`La palabra '${word}' si se encuentra en la sentencia '${sentence}'`);
  }else{
    return console.log(`La palabra '${word}' no se encuentra en la sentencia '${sentence}'`);
  }
}
findWord("Hola Mundo desde Js", "mundo");

console.log("*******************************************");


/*
  Mediante una función y dado un arreglo de enteros 'var numbers = [1, 2, 3, 4, 10, 11];',
  encuentra la suma de sus elementos
*/
console.log("*************** Ejercicio 2 ***************");

let numbers = [1, 2, 3, 4, 10, 11];
const sumNumbers = (array) =>{
  let sum = 0;
  array.forEach((el)=>{
    sum+=el;
  });
  return sum;
}
console.log(`La suma del arreglo es: ${sumNumbers(numbers)}`)

console.log("*******************************************");


/*
  Desarrolla un método para verificar si una palabra es un palíndromo. 
  Casos de prueba:
    - var word1 = 'madam';
    - var word2 = 'computadora';
*/
console.log("*************** Ejercicio 3 ***************");

const palindrome = (word = 'undefined')=>{
  word = word.toLowerCase();
  let backwardsWord = word.split('').reverse().join("");
  if(word === backwardsWord){
    console.log(`La palabra ${word} es palindromo! ya que al revés se lee como ${backwardsWord}`);
  }else{
    console.log(`La palabra ${word} no es palindromo! ya que al revés se lee como ${backwardsWord}`);
  }
}
palindrome();
palindrome("Hola");
palindrome("cOmPuTaDoRa");
palindrome("MadAM");

console.log("*******************************************");


/*
  Crea un programa, el cual sirva para convertir temperaturas de Celsius a Fahrenheit y viceversa. 
  Utiliza las expresiones matemáticas necesarias para la conversión.
  Que dicho programa reciba como argumentos las temperaturas y regresa el resultado
  imprimiendo en pantalla la conversión. Tu solución es libre a la imaginación
*/
console.log("*************** Ejercicio 4 ***************");

const conversion = (temperature, typeOfConversion)=>{
  temperature = temperature;
  typeOfConversion = typeOfConversion.toLowerCase();
  switch(typeOfConversion){
    case 'c':
      let celsius = (temperature - 32) * 5/9;
      console.log(`${temperature}° Fahrenheit es equivalente a ${celsius}° Celcius`);
    break;
    case 'f':
      let fahrenheit = temperature * (9/5) + 32;
      console.log(`${temperature}° Celsius es equivalente a ${fahrenheit}° Fahrenheit`);
    break;
  }
}
conversion(50, 'c');
conversion(10, 'f');

console.log("*******************************************");