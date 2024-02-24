// Creating a node class from where we will create new nodes for our doubly linked list
class Node {
    constructor(value){
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

// Initialize head with null
let head = null;

// Function for forward traversal
function forwardTraversal(){
    if(head === null){
        return;
    }
    
    let temp = head;
    
    console.log("Traversing forward");
    
    while(temp !== null){
        console.log(temp.data);
        temp = temp.next;
    }
}

// Function for backward traversal
function backwardTraversal(){
     if(head === null){
        return;
    }
    
    let temp = head;
    
    while(temp.next !== null){
        temp = temp.next;
    }
    
    let last = temp;
    
    console.log("Traversing backward");

    while(last !== null){
        console.log(last.data);
        last = last.prev;
    }
}

// Function for inserting a node at the beginning
function insertAtBeginning(value){
    const nodeToInsert = new Node(value);
    
    if(head === null){
        nodeToInsert.prev = null;
        nodeToInsert.next = null;
        head = nodeToInsert;
    }
    else{
        nodeToInsert.prev = null;
        nodeToInsert.next = head;
        head.prev = nodeToInsert;
        head = nodeToInsert;
    }
}

// Function for inserting a node at the end
function insertAtEnd(value){
    const nodeToInsert = new Node(value);
    
    if(head === null){
        nodeToInsert.prev = null;
        nodeToInsert.next = null;
        head = nodeToInsert;
    }
    else{
        let last = head;
        
        while(last.next !== null){
            last = last.next;
        }
        
        last.next = nodeToInsert;
        nodeToInsert.prev = last;
        nodeToInsert.next = null;
    }
}

// Function for searching a node
function searchNode(key){
    let temp = head;
    
    while(temp !== null){
        if(temp.data === key){
            return true;
        }
        
        temp = temp.next;
    }
    
    return false;
}

// Function for deleting a node
function deleteNode(key){
    if(head === null){
        return;
    }
    
    let temp = head;
    
    while(temp !== null && temp.data !== key){
        temp = temp.next;
    }
    
    if(temp === null){
        console.log("Key not found!!!");
        return;
    }
    else if(temp === head){
        head = head.next;

        if(head === null){
            return;
        }
        else{
            head.prev = null;
        }

    }
    else if(temp.next === null){
        temp.prev.next = null;
    }
    else{
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }
}

insertAtBeginning(30);
insertAtBeginning(20);
insertAtBeginning(10);
insertAtEnd(300);
insertAtEnd(200);
insertAtEnd(100);
insertAtEnd(40);
insertAtBeginning(2000);

forwardTraversal();
backwardTraversal();

deleteNode(4000);
forwardTraversal();
deleteNode(100);
forwardTraversal();
deleteNode(2000);
forwardTraversal();
deleteNode(40);
deleteNode(10);
deleteNode(20);
deleteNode(30);
deleteNode(300);
deleteNode(200);


forwardTraversal();
backwardTraversal();

console.log(searchNode(400));
console.log(searchNode(20));
