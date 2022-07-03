
// program to implement stack data structure
/*class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);*/

/*class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
  
  let q = new Queue();
  for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
  }
  // get the current item at the front of the queue
  console.log(q.peek()); // 1
  
  // get the current length of queue
  console.log(q.length); // 7
  
  // dequeue all elements
  while (!q.isEmpty) {
    console.log(q.dequeue());
  }*/

  /*class stack{
    constructor(){
      this.item = [];
    }
  
  
  add(element){
   return this.item.push(element);
  }
  remove(){
    if(this.item.length>0){
      return this.item.pop();
    }
  }
  Peek(){
      return this.item[this.item.length-1];
  }
  
  isEmpty(){
    return this.item.length==0;
  }
  Size(){
    return this.item.length
  }
  clear(){
    return this.item = [];
  }
  }
  
  let Stack = new stack();
  
  Stack.add(4);
  Stack.add(6);
  Stack.add(5);
  Stack.add(3);
  Stack.add(2);
  
  console.log(Stack.item)
  
  Stack.remove();
  console.log(Stack.item);
  
  console.log(Stack.Peek());
  console.log(Stack.isEmpty());
  console.log(Stack.Size());
  
  Stack.clear();
  console.log(Stack.item);
*/  

/*class  stack{
  constructor(){
    this.item = [];
  }

  add(element){
    return this.item.push(element)
  }
  remove(){
    if(this.item.length>0){
      return this.item.pop();
    }
  }
  peek(){
    return this.item[this.item.length-1];
  }
  isEmpty(){
    return this.item.length==0;
  }
  size(){
   return this.item.length
  }
  clear(){
    return this.item = [];
  }
}

  let parvez = new stack();

  parvez.add(8);
  parvez.add(9);
  parvez.add(4);
  parvez.add(12);
  parvez.add(6);
  parvez.add(7);

  console.log(parvez.item);

parvez.remove();
console.log(parvez.item);

console.log(parvez.peek());
console.log(parvez.isEmpty());
console.log(parvez.size());

parvez.clear();
console.log(parvez.item);
*/