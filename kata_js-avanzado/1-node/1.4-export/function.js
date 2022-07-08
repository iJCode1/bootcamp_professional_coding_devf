function sum(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// Forma 1 de exportar las funciones
// exports.sum = sum; === this.exports.sum = sum
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

// Forma 2 de exportar las funciones
module.exports = {
  sum,
  substract,
  multiply,
  divideNumber: divide,
}