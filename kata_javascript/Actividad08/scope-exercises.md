# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> _1_
> _2_
  
> _undefined_
> _2_


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _1_
> _1_

> _ƒ otherFunction(input) {return a;}_
> _5_


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _Va a imprimir en consola el número '2' por que la función 'bar' muestra en consola la variable 'a' que previamente se re inicializo con el valor de '2' y esta función 'bar' es el retorno de la función 'foo' por ende, al invocar la función 'foo' y guardarla en la variable 'baz' se guarda su retorno que es la función 'bar' y esta ya al ser ejecutada con 'baz()', imprime el número '2'_

> _2_


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> _'undefined' ya que la función al encontrar una sentencia 'return' detiene la ejecución y como el retorno no retorna nada, por defecto las funciones en JS retornan 'undefined'_

> _undefined_
