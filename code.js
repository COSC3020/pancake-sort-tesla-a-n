function flip(array, n) {
    //if n is bigger than array length, flip entire array
    //make copy
    //flip first n elememts
    return array;
}

//needs a function to find the max index
function findMaxIndex(array, end) {
    let maxIndex = 0;
    for (let i = 1; i <= end; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    // make copy

    //start large and reduce
        //find index of max element in unsorted portion
        //if max element not at end
            //if max element not at beginning, flip
            //then flip the subarray to move max to end
    return array;
}
