// Queue (FIFO)

// Using array
const SIZE = 3, arr = [];
let front = 0, rear = 0;

// Inserting into the queue -> Enqueue
function enqueue(value){
    if(rear === SIZE){
        console.log("Queue is full!!!");
    }
    else{
        arr[rear] = value;
        ++rear;
    }
}

// Deleting from the queue -> Dequeue
function dequeue(){
    if(front === rear){
        console.log("Queue is empty!!!");
    }
    else{
        console.log("Dequeued element ", arr[front])
        ++front;

        if(front === rear){
            front = 0;
            rear = 0;
        }
    }
}

// Display queue elements
function displayQueue(){
    console.log("<=== Queue ===>");
    
    for(let i = front; i < rear; ++i){
        console.log(arr[i]);
    }
    
    console.log("<=== Queue ===>");
}

dequeue();
enqueue(45);
enqueue(89);
enqueue(10);
enqueue(34);
displayQueue();
dequeue();
dequeue();
dequeue();
dequeue();
enqueue(66);
enqueue(23);
displayQueue();


// Using linked list
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let front = null, rear = null;

// Function to perform enqueue
function enqueue(value){
    const newNode = new Node(value);
    newNode.next = null;
    
    if(front === null && rear === null){
        front = rear = newNode;
    }
    else{
        rear.next = newNode;
        rear = newNode;
    }
}

// Function to perform dequeue
function dequeue(value){
    if(front === null){
        console.log("Queue is empty!!!");
    }
    else{
        console.log("<=== Dequeued element ===>", front.data);
        
        front = front.next;
        
        if(front === null){
            rear = null;
        }
    }
}

function displayQueue(){
    if(front === null && rear === null){
        return;
    }
    else{
        let temp = front;
        
        console.group("<=== Queue elements ===>");
        
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
        
        console.groupEnd();
    }
}

dequeue();
displayQueue();
enqueue(1201);
enqueue(1202);
enqueue(1203);
displayQueue();
dequeue();
dequeue();
dequeue();
dequeue();
displayQueue();
