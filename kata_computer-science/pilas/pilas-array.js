class Stack {

  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element)
    return this.stack
  }

  pop(){
    return this.stack.pop()
  }

  peek(){
    return this.stack[this.stack.length-1]
  }

  size(){
    return this.stack.length
  }

  print(){
    console.log(this.stack)
  }

  isEmpty(){
    return this.stack.length === 0
  }

  clear(){
    this.stack = []
  }

}

let stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.push('Azul'));
console.log(stack.push('Esmeralda'));
console.log(stack.push('Verde'));
console.log(stack.push('Amarillo'));
console.log(stack.push('Rojo'));
stack.print();
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());