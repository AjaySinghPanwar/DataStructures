// Bubble sort - Repeatedly swapping the adjacent elements if they are in the wrong order.
// TC => O(n^2), SC => O(n), OSC => O(1)
// Best case TC => O(n)
// Since OSC is constant, it is an inplace sorting algorith

function bubbleSort(arr, size){
    let i, j, flag = 0;
    
    for(let i = 0; i < size - 1; ++i){
        for(let j = 0; j < size - 1; ++j){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // If the array is already sorted, then the excution will never come inside this block, and in only one iteration we will know that we are done processing
                flag = 1;
            }
        }
        
        // And since flag is 0, we break out of the loop
        if(flag === 0){
            break;
        }
    }
}

let example_arr = [45, 6, 30, 2, 10];
bubbleSort(example_arr, 5);
console.log(example_arr);

// let example_sorted_arr = [1, 10, 20, 30, 40];
// bubbleSort(example_sorted_arr, 5);
// console.log(example_sorted_arr);
