/*
function greeting(name){
  return 'Hola', name, 'Desde WebPack con JS';
}
*/

// Arrow function
const greeting = name => `Hola ${name} desde WebPack con JS`;

const numberArray = [10, 20, 30, 40, 50, 60];

// Export Node Common Js
module.exports = {greeting, numberArray};