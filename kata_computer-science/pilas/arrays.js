const array = [1, 6, 4, 9, 5, 2, 8, 3, 7];
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let result;

array.push(10);
console.log(array);

array.pop();
console.log(array);

array.forEach(el=>console.log(el));

result = array.map(el=>el*2);
console.log(result);

result = array.filter(el=>el%2===0);
console.log(result);

result = array.find(el=>el%2===0);
console.log(result);

result = array.indexOf(2);
console.log(result);

result = arr1.concat(arr2);
console.log(result);

result = array.every(el=>el>2);
console.log(result);

result = array.some(el=>el>2);
console.log(result);

result = array.includes(2);
console.log(result);

result = array.join('-');
console.log(result);

result = array.slice('-');
console.log(result);

result = array.reduce((acc,el)=>acc+el);
console.log(result);

result = array.fill(0,2,5);
console.log(result);
console.log(array);

result = array.fill(0,2);
console.log(result);

result = array.fill(0);
console.log(result);

/*
NOTA PARA SORT

si la comparación es menor que 0, se sitúa a en un índice menor que b. Es decir, a viene primero.

retorna 0, se deja a y b sin cambios entre ellos

si la comparación es mayor que 0, se sitúa b en un índice menor que a
*/

result = array.sort();
console.log(result);

result = array.sort((a,b)=>a > b ? 1 : -1);
// result = array.sort((a,b)=>a-b);
console.log(result);

result = array.sort((a,b)=>a > b ? -1 : 1);
// result = array.sort((a,b)=>b-a);
console.log(result);


result = result.reverse();
console.log(result);

array.shift()
console.log(array)
array.shift()
console.log(array)
array.unshift(1,2)
console.log(array)