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
