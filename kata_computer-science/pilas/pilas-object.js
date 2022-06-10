class Stack {

  constructor() {
    this.stack = {}
    this.count = 0
  }

  push(element){
    this.stack[this.count] = element
    this.count++
    return this.stack
  }

  pop(){
    this.count--
    const result = this.stack[this.count]
    delete this.stack[this.count]
    return result
  }

  peek(){
    return this.stack[this.count - 1]
  }

  size(){
    return this.count
  }

  print(){
    console.log(this.stack)
  }

  isEmpty(){
    return this.count === 0
  }

  clear() {
    this.stack = {}
    this.count = 0
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