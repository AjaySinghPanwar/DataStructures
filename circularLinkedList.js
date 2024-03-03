// Creating a class Node to create our circular linked list nodes
class Node{
    constructor(value){
        this.data = value;
        this.next = null
    }
}

// const head = new Node(100);
// const middle = new Node(200);
// const last = new Node(300);

// head.next = middle;
// middle.next = last;
// last.next = head;

// Function for traversing the circular linked list
function traversal(){
    if (head === null){
        return;
    }
    
    let temp = head;
    
    do{
        console.log(temp.data);
        temp = temp.next;
    }while(temp !== head);
}

// Function to insert a node at start of the circular linked list
function insertAtBeginning(value){
    let newNode = new Node(value);
    
    if(head === null){
        newNode.next = newNode;
        head = newNode;
    }
    else{
        let last = head;
        
        while(last.next !== head){
            last = last.next;
        }
        
        last.next = newNode;
        newNode.next = head;
        head = newNode;
    }
}

// Function to insert a node at end of the circular linked list
function insertAtEnd(value){
    let newNode = new Node(value);
    
    if(head === null){
        newNode.next = newNode;
        head = newNode;
    }
    else{
        let last = head;
        
        while(last.next !== head){
            last = last.next;
        }
        
        last.next = newNode;
        newNode.next = head;
    }
}

// Function for searching a node in the given circular linked list
function search(key){
    if(head === null){
        return;
    }
    
    let temp = head;
    
    do {
        if(temp.data === key){
            return true;
        }
        
        temp = temp.next;
    }while(temp !== head);
    
    return false;
}

let head = null;

insertAtBeginning(100);
insertAtBeginning(200);
insertAtBeginning(300);
insertAtEnd(400);
insertAtEnd(500);
insertAtBeginning(600);
console.log(search(400));
console.log(search(8999));

traversal();
