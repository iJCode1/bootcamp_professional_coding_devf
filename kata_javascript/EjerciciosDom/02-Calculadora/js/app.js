let d = document;
let $error = d.getElementById("calc-error");
let $screen = d.getElementById("calc-screen");
let $zero = d.getElementById("calc-zero");
let $one = d.getElementById("calc-one");
let $two = d.getElementById("calc-two");
let $three = d.getElementById("calc-three");
let $four = d.getElementById("calc-four");
let $five = d.getElementById("calc-five");
let $six = d.getElementById("calc-six");
let $seven = d.getElementById("calc-seven");
let $eight = d.getElementById("calc-eight");
let $nine = d.getElementById("calc-nine");
let $ten = d.getElementById("calc-ten");
let $clean = d.getElementById("calc-clean");
let $div = d.getElementById("calc-div");
let $mult = d.getElementById("calc-mult");
let $sub = d.getElementById("calc-sub");
let $add = d.getElementById("calc-add");
let $equal = d.getElementById("calc-equal");
let $delete = d.getElementById("calc-delete");
let $dot = d.getElementById("calc-dot");

// Asignando el valor por defecto al abrir la calculadora
$screen.textContent = null;

let ope = ''; // Variable para guadar el operador o simbolo que presione usuario
let result = undefined; // Variable para guardar el resultado de la operación
let error = ""; //Variable para guardar un error en caso exista
let array = []; //arreglo para guardar todo lo ingresado

// ****************** Valores (Números) ******************
$zero.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push("0");
    $screen.textContent += '0';
  }else{
    array.push("0");
    $screen.textContent += '0';
  }
})
$one.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('1');
    $screen.textContent = array.join('');
  }else{
    array.push('1');
    $screen.textContent = array.join('');
  }
})
$two.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('2');
    $screen.textContent = array.join('');
  }else{
    array.push('2');
    $screen.textContent = array.join('');
  }
})
$three.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('3');
    $screen.textContent = array.join('');
  }else{
    array.push('3');
    $screen.textContent = array.join('');
  }
})
$four.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('4');
    $screen.textContent = array.join('');
  }else{
    array.push('4');
    $screen.textContent = array.join('');
  }
})
$five.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('5');
    $screen.textContent = array.join('');
  }else{
    array.push('5');
    $screen.textContent = array.join('');
  }
})
$six.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('6');
    $screen.textContent = array.join('');
  }else{
    array.push('6');
    $screen.textContent = array.join('');
  }
})
$seven.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('7');
    $screen.textContent = array.join('');
  }else{
    array.push('7');
    $screen.textContent = array.join('');
  }
})
$eight.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('8');
    $screen.textContent = array.join('');
  }else{
    array.push('8');
    $screen.textContent = array.join('');
  }
})
$nine.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(ope === ''){
    array.push('9');
    $screen.textContent = array.join('');
  }else{
    array.push('9');
    $screen.textContent = array.join('');
  }
})
$dot.addEventListener('click', ()=>{
  mostrarError(false, '');
  array.push('.');
  $screen.textContent = array.join('');
})

// ****************** Operaciones ******************
$add.addEventListener('click', ()=>{
  if(array.length === 0){
    mostrarError(true, 'Debes seleccionar primero un número');
  }else{
    if(!(array[array.length-1] === '+' || array[array.length-1] === '-' || array[array.length-1] === '*' || array[array.length-1] === '/')){
      mostrarError(false, '');
      ope = '+';
      array.push('+');
      $screen.textContent = array.join('');
    }else{
      mostrarError(true, "No se permite el uso de 2 simbolos '+' seguidos");
    }
  }
})
$sub.addEventListener('click', ()=>{
  if(array.length === 0){
    mostrarError(true, 'Debes seleccionar primero un número');
  }else{
    if(!(array[array.length-1] === '+' || array[array.length-1] === '-' || array[array.length-1] === '*' || array[array.length-1] === '/')){
      mostrarError(false, '');
      ope = '-';
      array.push('-');
      $screen.textContent = array.join('');
    }else{
      mostrarError(true, "No se permite el uso de 2 simbolos '-' seguidos");
    }
  }
})
$mult.addEventListener('click', ()=>{
  if(array.length === 0){
    mostrarError(true, 'Debes seleccionar primero un número');
  }else{
    if(!(array[array.length-1] === '+' || array[array.length-1] === '-' || array[array.length-1] === '*' || array[array.length-1] === '/')){
      mostrarError(false, '');
      ope = '*';
      array.push('*');
      $screen.textContent = array.join('');
    }else{
      mostrarError(true, "No se permite el uso de 2 simbolos '*' seguidos");
    }
  }
})
$div.addEventListener('click', ()=>{
  if(array.length === 0){
    mostrarError(true, 'Debes seleccionar primero un número');
  }else{
    if(!(array[array.length-1] === '+' || array[array.length-1] === '/' || array[array.length-1] === '*' || array[array.length-1] === '/')){
      mostrarError(false, '');
      ope = '/';
      array.push('/');
      $screen.textContent = array.join('');
    }else{
      mostrarError(true, "No se permite el uso de 2 simbolos '/' seguidos");
    }
  }
})

// ****************** Borrar 1 dígito ******************
$delete.addEventListener('click', ()=>{
  if(array.length === 1){
    array = array.toString().split('');
    let x = borrarDato(array);
    $screen.textContent = x.join('');
  }else{
    let x = borrarDato(array);
    $screen.textContent = x.join('');
  }
})

// ****************** Limpiar ******************
$clean.addEventListener('click', ()=>{
  $screen.textContent = null;
  limpiarVariables();
  mostrarError(false, '');
})

// ****************** Resultado ******************
$equal.addEventListener('click', ()=>{
  mostrarError(false, '');
  if(array.length === 1){
    $screen.textContent = array.join('');
  }else{
    let res = obtenerResultado(ope);
    let result2 = res;
    limpiarVariables();
    (res === 0) ? array : array.push(result2);
  }
})

const obtenerResultado = (ope) => {
  let res=0;
  let joined = array.join('');
  let value1, value2;
  switch(ope){
    case '+':
      value1 = joined.slice(0, joined.indexOf('+'));
      value2 = joined.slice(joined.indexOf('+')+1, joined.length);
      res = Number(value1) + Number(value2);
    break;
    case '-':
      value1 = joined.slice(0, joined.indexOf('-'));
      value2 = joined.slice(joined.indexOf('-')+1, joined.length);
      res = Number(value1) - Number(value2);
    break;
    case '*':
      value1 = joined.slice(0, joined.indexOf('*'));
      value2 = joined.slice(joined.indexOf('*')+1, joined.length);
      res = Number(value1) * Number(value2);
    break;
    case '/':
      value1 = joined.slice(0, joined.indexOf('/'));
      value2 = joined.slice(joined.indexOf('/')+1, joined.length);
      if(value2 != 0){
        res = Number(value1) / Number(value2);
      }else{
        mostrarError(true, "No se puede dividir entre 0");
      }
    break;
    default:;
  }
  if(res.toString().length > 14){
    res = res.toFixed(2);
  }
  $screen.textContent = res;
  return res;
}

// ****************** Mensajes ******************
const mostrarError = (estado, mensaje) =>{
  if(estado){
    $error.textContent = mensaje;
  }else{
    $error.textContent = "";
  }
}

// ****************** Limpiar variables ******************
const limpiarVariables = () => {
  ope = '';
  result = '';
  array = [];
}

// ****************** Borrar ******************
const borrarDato = (array) => {
  if(array.length > 0){
    array.pop();
  }
  return array;
}