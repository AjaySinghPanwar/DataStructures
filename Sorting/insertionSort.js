// Insertion sort - Builds the final sorted array (or list) one item at a time by comparisons. We consider here that the first item is always sorted.
// TC => O(n^2), SC => O(n), OSC => O(1)
// Best case TC => O(n)
// Since OSC is constant, it is an inplace sorting algorith

function insertionSort(arr, size){
    let i, index, value;
    
    for(let i = 1; i < size; ++i){
        index = i;
        value = arr[i];
        
        while(index > 0 && arr[index - 1] > value){
            arr[index] = arr[index - 1];
            --index;
        }
        
        arr[index] = value;
    }
}

let example_arr = [45, 6, 30, 2, 10];
insertionSort(example_arr, 5);
console.log(example_arr);

// let example_sorted_arr = [1, 10, 20, 30, 40];
// insertionSort(example_sorted_arr, 5);
// console.log(example_sorted_arr);
