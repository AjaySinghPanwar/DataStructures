class BSTNode {
    constructor(value){
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

// For inserting a node
function insertNode(root, value){
    if(root === null){
        return new BSTNode(value);
    }
    else if(value < root.key){
        root.left = insertNode(root.left, value);
    }
    else if(value > root.key){
        root.right = insertNode(root.right, value);
    }
    
    return root;
}

// For inorder traversal
function inorderTraversal(root){
    if(root === null){
        return;
    }
    
    inorderTraversal(root.left);
    console.log(root.key);
    inorderTraversal(root.right);
}

// Function for searching a node
function searchNode(root, value){
    if(root === null){
        return false;
    }
    else if(root.key === value){
        return true;
    }
    else if (value > root.key){
        return searchNode(root.right, value);
    }
    else {
        return searchNode(root.left, value);
    }
}

// Function for deleting a node
function getRightMin(root){
    let temp = root;
    
    while(temp.left !== null){
        temp = temp.left;
    }
    
    return temp.key;
}

function deleteNode(root, value){
    if(root === null){
        return null;
    }
    else if(value < root.key){
        root.left = deleteNode(root.left, value);
    }
    else if(value > root.key){
        root.right = deleteNode(root.right, value);
    }
    else{
        if(root.left === null && root.right === null){
            return null;
        }
        else if(root.left === null){
            return root.right;
        }
        else if(root.right === null){
            return root.left;
        }
        else {
            let rightMin = getRightMin(root.right);
            root.key = rightMin;
            root.right = removeNode(root.right, rightMin);
        }
    }
    
    return root;
}

let root = null;
console.log("Inserting node ", 100)
root = insertNode(root, 100);
console.log("Inserting node ", 200)
root = insertNode(root, 200);
console.log("Inserting node ", 300)
root = insertNode(root, 300);
console.log("Inserting node ", 600)
root = insertNode(root, 600);
console.log("Inserting node ", 400)
root = insertNode(root, 400);

inorderTraversal(root);
console.log(searchNode(root, 500));
root = deleteNode(root, 300);
inorderTraversal(root);
