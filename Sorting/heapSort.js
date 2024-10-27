// *** Introduction to Binary Heap
// A binary heap is a complete binary tree with specific ordering properties.

// *** Types of Binary Heaps:
// Max-Heap: Every parent node is greater than or equal to its children. The largest element is at the root.
// Min-Heap: Every parent node is smaller than or equal to its children. The smallest element is at the root.

// *** Properties:
// Complete Tree: All levels are fully filled except possibly the last, which is filled from left to right.

// *** Array Representation: Binary heaps are often implemented as arrays.

// For a node at index i:
// Left child is at index 2i + 1.
// Right child is at index 2i + 2.
// Parent is at index (i - 1) // 2.

// *** Heapify
// Heapify is a process of creating a heap data structure from an unsorted array.

// *** Types of Heapify:
// Max-Heapify: Ensures the max-heap property (parent nodes are greater than or equal to children).
// Min-Heapify: Ensures the min-heap property (parent nodes are less than or equal to children).

// *** How it Works:
// Starting from a node, compare it with its children.
// Swap the node with its largest (or smallest for min-heap) child if it violates the heap property.
// Recursively apply the heapify operation until the heap property is restored.

// *** Time Complexity: O(log n) for a single call to heapify since we move down a single path in the tree.

// *** Building a Heap
// Build-Heap is the process of turning an entire array into a binary heap.

// *** The process:
// Start from the last non-leaf node and apply heapify.
// Move upwards, heapifying each node until reaching the root.

// *** Time Complexity: O(n) for building the entire heap due to amortized costs.

// *** Heap Sort
// Heap Sort is a sorting algorithm that uses a binary heap to sort an array.

// *** Algorithm:
// Build a Max-Heap from the input array.
// Extract the root (the largest element) from the heap and place it at the end of the array.
// Reduce the size of the heap and heapify the root to restore the max-heap property.
// Repeat the process until all elements are sorted.

// *** Time Complexity: O(n log n) due to n calls to heapify, each taking O(log n).
// Space Complexity: O(1) for in-place sorting.

// *** Key Points
// Binary heaps are efficient for priority queues (e.g., scheduling, shortest path algorithms).
// Heapify is used to maintain the heap structure after changes.
// Heap Sort is an efficient, comparison-based sorting algorithm with consistent O(n log n) performance.


function BuildHeap(arr, size)
{
    var i = Math.floor(size / 2);
    for(; i >= 0; i--)
        Heapify(arr,i,size);
}

function Heapify(arr, index, size)
{
    var left = 2 * index + 1;
    var right = left + 1;
    var max = index;
    if(left <= size && arr[left] > arr[max])
        max = left;
    if(right <= size && arr[right] > arr[max])
        max = right;
    if(index != max)
    {
        [arr[max], arr[index]] = [arr[index], arr[max]];
        Heapify(arr,max,size);
    }
}

function HeapSort(arr, size)
{
    BuildHeap(arr,size);

    while(size > 0)
    {
        [arr[0], arr[size]] = [arr[size], arr[0]]
        size--;
        Heapify(arr,0,size);
    }
}
 
var n = 7;
var arr = [80, 30, 60, 10, 20, 40, 50];
HeapSort(arr, n-1);

console.log("Sorted Array: " + arr);
