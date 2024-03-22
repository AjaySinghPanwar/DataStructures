# Graph can be represented as G(V, E) where V is the vertices and E is the edges
## V != {} and E = {}
## Types of Graph - Undirected (Direction of edge is not present) and Directed (Direction of edge is present)
## Degree of Graph - In degree of a Vertex (No. of edges coming into a vertex) and Out degree of a Vertex (No. of edges coming out of a vertext)


## Adjacency matrix representation of a Graph
### An Adjacency matrix is a square matrix of N x N size where N is the number of nodes in the graph and it is used to represent the connections between the edges of a graph.
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
