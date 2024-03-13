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

// Function for searching a key
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

let root = null;
console.log("Inserting node ", 100)
root = insertNode(root, 100);
console.log("Inserting node ", 200)
root = insertNode(root, 200);
console.log("Inserting node ", 300)
root = insertNode(root, 300);

inorderTraversal(root);
console.log(searchNode(root, 500));
