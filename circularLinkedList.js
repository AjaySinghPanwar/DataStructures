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

let head = null;

insertAtBeginning(100);
insertAtBeginning(200);
insertAtBeginning(300);

traversal();
