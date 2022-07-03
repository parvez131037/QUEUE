class Queue{
    constructor(){
        this.item = [];
    }
    
    //for adding the element
    enqueue(element){
        return this.item.push(element);
    }
//for removing the element
dequeue(){
    if(this.item.length>0){
        return this.item.shift();
    }
}

//to find a peek number
peek(){
    return this.item[this.item.length-1];
}

//to finda size of  queue
size(){
    return this.item.length;
}

//to find is queue is empty or not
isEmpty(){
    return this.item.length==0;
}

//for clearing the queue

clear(){
    return this.item = [];
}
}

//creating a new queue
let queue = new Queue();

queue.enqueue(8);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(15);
queue.enqueue(45);

console.log(queue.item);

queue.dequeue();
console.log(queue.item);

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

queue.clear();
console.log(queue.item);