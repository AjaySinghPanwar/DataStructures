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

// Function to delete a node from the circular linked list
function deleteNode(key){
    if(head === null){
        return;
    }
    else if(head.data === key && head.next === head){
        head = null;
    }
    else if(head.data === key){
        let last = head;
        
        while(last.next !== head){
            last = last.next;
        }
        
        last.next = head.next;
        head = head.next;
    }
    else{
        let current = head;
        
        while(current.next !== head){
            if(current.next.data === key){
                current.next = current.next.next;
                break;
            }
            
            current = current.next;
        }
    }
}

let head = null;

console.log("Inserting at beginning .....")
insertAtBeginning(100);
insertAtBeginning(200);
insertAtBeginning(300);
traversal();
console.log("\n")

console.log("Inserting at end .....")
insertAtEnd(400);
insertAtEnd(500);
traversal();
console.log("\n")

console.log("Inserting at beginning .....")
insertAtBeginning(600);
traversal();
console.log("\n")

console.log("Searching.....")
console.log("400 found... ", search(400));
console.log("8999 found... ", search(8999));
console.log("\n");


console.log("Traversing.....")
traversal();
console.log("\n");

deleteNode(600)
console.log("Deleting 600.....")
traversal();
console.log("\n");

deleteNode(300);
console.log("Deleting 300.....")
traversal();
console.log("\n");

deleteNode(500);
console.log("Deleting 500.....")
traversal();
console.log("\n");

deleteNode(400);
console.log("Deleting 400.....")
traversal();
console.log("\n");

deleteNode(100);
console.log("Deleting 100.....")
traversal();
console.log("\n");

deleteNode(200);
console.log("Deleting 200.....")
traversal();
console.log("\n");

deleteNode(200);
console.log("Deleting 200.....")
traversal();
console.log("\n");
