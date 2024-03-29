/** Graph can be represented as G(V, E) where V is the vertices and E is the edges
 V != {} and E = {}
 Types of Graph - Undirected (Direction of edge is not present) and Directed (Direction of edge is present)
 Degree of Graph - In degree of a Vertex (No. of edges coming into a vertex) and Out degree of a Vertex (No. of edges coming out of a vertext)
 **/


/** Adjacency matrix representation of a Graph
    An Adjacency matrix is a square matrix of N x N size where N is the number of nodes in the graph and it is used to represent the connections between the edges of a graph.
**/

// Function for adding an edge to the graph
function addEdge(arr, src, dest){
    arr[src][dest] = 1;
}

// Function for removing an edge from the graph
function removeEdge(arr, src, dest){
    arr[src][dest] = 0;
}

// Function for checking if an edge exists between two vertices
function hasEdge(arr, src, dest){
    if(arr[src][dest] === 1){
        return 1;
    }
    
    return 0;
}

// Function for printing adjacency matrix
function printAdjMatrix(arr){
    for(let i = 0; i < V; ++i){
        for(let j = 0; j < V; ++j){
            process.stdout.write(arr[i][j] + " ");
        }
        console.log("\n");
    }
}

const V = 5;
let adjacencyMatrix = new Array(V);

for(let i = 0; i < adjacencyMatrix.length; ++i){
  adjacencyMatrix[i] = new Array(V).fill(0);
}

addEdge(adjacencyMatrix, 1, 2);
addEdge(adjacencyMatrix, 0, 1);
addEdge(adjacencyMatrix, 1, 4);
addEdge(adjacencyMatrix, 3, 2);
addEdge(adjacencyMatrix, 0, 2);

printAdjMatrix(adjacencyMatrix);
console.log("<===================> \n")

removeEdge(adjacencyMatrix, 0, 1);
removeEdge(adjacencyMatrix, 1, 2);

printAdjMatrix(adjacencyMatrix);



/** Adjacency list representation of a Graph
    An adjacency list represents a graph as an array of linked lists. The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex.
**/


class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

let adjacencyList = new Array(V).fill(null);

// Function for adding an edge to the graph
function addEdge(src, dest){
    let newNode = new Node();
    newNode.data = dest;
    newNode.next = null;
    
    if(adjacencyList[src] === null){
        adjacencyList[src] = newNode;
    }
    else{
        let temp = adjacencyList[src];
        
        while(temp.next !== null){
            temp = temp.next;
        }
        
        temp.next = newNode;
    }
}

// Function for removing an edge from the graph
function removeEdge(src, dest){
    if(adjacencyList[src] === null){
        return;
    }
    else if(adjacencyList[src].data === dest){
        adjacencyList[src] = adjacencyList[src].next;
    }
    else{
        let temp = adjacencyList[src];
        
        while(temp.next !== null){
            if(temp.next.data === dest){
                temp.next = temp.next.next;
                break;
            }
            
            temp = temp.next;
        }
    }
}

// Function for checking if an edge exists between two vertices
function hasEdge(src, dest){
    let temp = adjacencyList[src];
    
    while(temp !== null){
        if(temp.data === dest){
            return 1;
        }
        
        temp = temp.next;
    }
    
    return 0;
}

// Function for printing adjacency list
function printAdjacencyList(){
    for(let i = 0; i < V; ++i){
        let temp = adjacencyList[i];
        
        console.log(`adjacencyList[${i}] => `);
        
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

addEdge(0,1);
addEdge(0,2);
addEdge(0,3);
addEdge(1,3);
addEdge(1,4);
addEdge(2,3);
addEdge(3,4);

console.log("Adjacency List Representation of the Graph: ");
printAdjacencyList();

console.log(hasEdge(0, 3))
console.log(hasEdge(1, 2))

removeEdge(0, 2);
console.log(hasEdge(0, 2))
