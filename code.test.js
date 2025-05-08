const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

// test flip
const testFlip = 
    jsc.forall("array nat", "nat", function(arr, n) {
        //make sure n is within bounds
        const flipSize = n % (arr.length + 1);

        //perform flip
        const flipped = flip([...arr], flipSize);

        //manually compute what flip should produce
        const expected = [...arr];
        const size = Math.min(flipSize, expected.length);
        for (let i = 0; i < Math.floor(size / 2); i++) {
            const temp = expected[i];
            expected[i] = expected[size - 1 - i];
            expected[size - 1 - i] = temp;
        }

        return JSON.stringify(flipped) === JSON.stringify(expected);
    });
jsc.assert(testFlip);

console.log("Testing specific cases:");

// Basic array
const arr1 = [3, 1, 5, 2, 4];
console.log(`Original array: [${arr1}]`);
console.log(`Sorted array: [${pancakeSort(arr1)}]`);

// Empty array
const arr2 = [];
console.log(`Empty array: [${arr2}]`);
console.log(`Sorted empty array: [${pancakeSort(arr2)}]`);

// single element
const arr3 = [42];
console.log(`Single element array: [${arr3}]`);
console.log(`Sorted single element array: [${pancakeSort(arr3)}]`);

//already sorted array
const arr4 = [1, 2, 3, 4, 5];
console.log(`Already sorted array: [${arr4}]`);
console.log(`Pancake sorted: [${pancakeSort(arr4)}]`);

// Reverse sorted array
const arr5 = [5, 4, 3, 2, 1];
console.log(`Reverse sorted array: [${arr5}]`);
console.log(`Pancake sorted: [${pancakeSort(arr5)}]`);

// Test flip function
console.log("\nTesting flip function:");
console.log(`Original array: [1, 2, 3, 4]`);
console.log(`Flip(2): [${flip([1, 2, 3, 4], 2)}]`);
console.log(`Flip(4): [${flip([1, 2, 3, 4], 4)}]`);
console.log(`Flip(10): [${flip([1, 2, 3, 4], 10)}]`);
