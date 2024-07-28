// Selection sort - Repeatedly select an element (smallest / largest) and move it to the sorted position
// TC => O(n^2), SC => O(n), OSC => O(1)
// Since OSC is constant, it is an inplace sorting algorith

function selectionSort(arr, size){
    let i, j;
    
    for(let i = 0; i < size - 1; ++i){
        for(let j = i + 1; j < size; ++j){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

let example_arr = [45, 6, 30, 2, 10];
selectionSort(example_arr, 5);
console.log(example_arr);
