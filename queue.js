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
