// Stack using array
let arr = [];
const SIZE = 5;
let top = -1;

function push(value){
    if(top === SIZE - 1){
        console.log("Stack is full!!!");
    }
    else{
        ++top;
        arr.push(value);
    }
}

function pop(){
    if(top === -1){
        console.log("Stack is empty!!!");
    }
    else{
        console.log("Popped element ", arr[top]);
        --top;
        arr.pop();
    }
}

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 40....")
push(40);
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 490....")
push(490);
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 40....")
push(40);
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 400....")
push(400);
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 401....")
push(401);
console.log("Stack ===> ", arr, "\n");

console.log("Pushing 89....")
push(31);
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");

console.log("Popping....")
pop();
console.log("Stack ===> ", arr, "\n");



// Stack using linked list
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

let head = null;

// Function to push data to stack
function push(value){
    let newNode = new Node(value);
    
    newNode.next = head;
    head = newNode;
}

// Function for popping data from stack
function pop(){
    if(head === null){
        console.log("Stack is empty!!!");
    }
    else{
        console.log("Popped element... ", head.data);
        head = head.next;
    }
}

pop();

console.log("Pushing... ", 45)
push(45);

console.log("Pushing... ", 90)
push(90);

console.log("Pushing... ", 890)
push(890);

pop();
pop();
pop();
pop();

