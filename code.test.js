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
    jsc.forall("array nat", function(arr, n) {
        //make sure n is within bounds
        const flipSize = n % (arr.length + 1);

        //perform flip
        const flipped = flip([...arr], flipSize);

        //manually compute what flip should produce
        const expected = [...arr];
        const size = Math.min(flipSize, expected.length);
        for (let i = 0; i < Math.floor(size / 2); i++) {
            const temp = expected [i];
            expected[i] = expected[size - 1 - i];
            expected[size - 1 - i] = temp;
        }

        return JSON.stringify(flipped) === JSON.stringify(expected);
    });
jsc.assert(testFlip);


