// const operations1 = require('./modules/sum-substract');
import {sum, substract} from './modules/sum-substract.js';

// const operations2 = require('./modules/multiply-divide');
import * as operations from './modules/multiply-divide.js';

function main(){
  let n1 = 10;
  let n2 = 40;

  // const resultSum = operations1.sum(n1, n2);
  // const resultSub = operations1.substract(n1, n2);
  
  const resultSum = sum(n1, n2);
  const resultSub = substract(n1, n2);
  const resultMult = operations.multiply(n1, n2);
  const resultDiv = operations.divideNumber(n1, n2);

  console.log('La Suma es: ',resultSum);
  console.log('La Resta es: ',resultSub);
  console.log('La Multiplicación es: ',resultMult);
  console.log('La División es: ',resultDiv);
}

main();