let arr = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];

const busquedaLineal = (array, numero) =>{
  let iteraciones = 0;
  let msg = 'He fallado';
  for(let i=0; i<array.length; i++){
    iteraciones = i+1;
    if(array[i] === numero){
      msg = 'Lo encontre';
      break;
    }
  }
  msg += ` - Con un total de ${iteraciones} iteraciones`;
  return msg;
}

console.log(busquedaLineal(arr, 3)); // He fallado - Con un total de 10 iteraciones
console.log(busquedaLineal(arr, 19)); // Lo encontre - Con un total de 2 iteraciones
console.log(busquedaLineal(arr, 27)); // Lo encontre - Con un total de 4 iteraciones