// For creating nodes of our linked list
class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let head = null;

// Function for traversal
function traversal(){
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

// Function for inserting a node at beggining
function insertAtBeginning(value){
    const nodeToInsert = new Node(value);
    
    if(head === null){
        head = nodeToInsert;
    }
    else{
        nodeToInsert.next = head;
        head = nodeToInsert;
    }
}
// Function for inserting a node at end
function insertAtEnd(value){
    const nodeToInsert = new Node(value);
    
    if(head === null){
        head = nodeToInsert;
    }
    else{
        let temp = head;
        
        while(temp.next !== null){
            temp = temp.next;
        }
        
        temp.next = nodeToInsert;
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
    
    if(head.data === key){
        head = head.next;
    }
    else{
        let temp = head;
    
        while(temp.next !== null){
           if(temp.next.data === key){
               temp.next = temp.next.next;
               return;
           }
           
           temp = temp.next;
        }
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

traversal();
console.log(searchNode(40));

deleteNode(4000);
traversal();
deleteNode(100);
traversal();
deleteNode(2000);
traversal();
deleteNode(40);
deleteNode(10);
deleteNode(20);
deleteNode(30);
deleteNode(300);
deleteNode(200);


traversal();

console.log(searchNode(20));
