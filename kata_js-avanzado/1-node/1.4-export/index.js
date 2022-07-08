const operations = require('./function.js');

function main(){
  let n1 = 10;
  let n2 = 40;

  const resultSum = operations.sum(n1, n2);
  const resultSub = operations.substract(n1, n2);
  const resultMult = operations.multiply(n1, n2);
  const resultDiv = operations.divideNumber(n1, n2);

  console.log('La Suma es: ',resultSum);
  console.log('La Resta es: ',resultSub);
  console.log('La Multiplicación es: ',resultMult);
  console.log('La División es: ',resultDiv);
}

main();