function flip(array, n) {
    //if n is bigger than array length, flip entire array
    n = Math.min(n, array.length);
    
    //make copy
    const result = [...array];
    
    //flip first n elememts
    for (let i = 0; i < Math.floor(n / 2); i++) {
        const temp = result[i];
        result[i] = result[n - 1];
        result[n - 1] = temp;
    }
    
    return result;
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
