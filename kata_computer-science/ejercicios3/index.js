// // Clase 'Figura' para instanciar un cuadrado y triangulo
// class Figura {
//   constructor(base, altura){
//     this.base = base;
//     this.altura = altura;
//   }

//   calcularArea(){
//     return this.base * this.altura;
//   }
// }

// const cuadrado = new Figura(4, 8);
// console.log(cuadrado.calcularArea());

// const rectangulo = new Figura(9, 3);
// console.log(rectangulo.calcularArea());

// const triangulo = new Figura(7, 8);

// // Sobreescribiendo el método 'calcularArea'
// triangulo.calcularArea = function(){
//   return this.base * this.altura / 2;
// }

// console.log(triangulo.calcularArea());


// // Creando métodos a cada instancia
// cuadrado.calcularPerimetro = function(){
//   return this.base * 4;
// }

// rectangulo.calcularPerimetro = function(){
//   return this.base * 2 + this.altura * 2;
// }

// triangulo.calcularPerimetro = function(){
//   return `Faltan datos!`;
// }

// console.log(cuadrado.calcularPerimetro());
// console.log(rectangulo.calcularPerimetro());
// console.log(triangulo.calcularPerimetro());



// ***************** Ejercicio 2 *****************

class Animal {
  brain = true;
  constructor(legs, weight){
    this.legs = legs;
    this.weight = weight;
  }
}

let Human = new Animal(2, '72kg');
console.log('Human:', Human);

let Pet = new Animal(4, '3kg');
// Forma 1:  Pet.fleas = 0;
// Forma 2
Pet.setFleas = function(fleas){
  this.fleas = fleas;
}
Pet.setFleas(0);
console.log('Pet:', Pet);

let Dog = Object.create(Pet);
Dog.setFleas(8);
console.log('Dog:', Dog);

let Cat = Object.create(Pet);
Cat.setFleas(4);
console.log('Cat:', Cat);

