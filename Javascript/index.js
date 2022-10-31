import {
    arraySum,
    arrayMin,
    arrayMax,
    sortArray,
    liveAvg,
    badFibo
} from './tools.js';


const numbers = [1, -2, 3, 4, 12, 0, -5, 8, 12];


console.log(`sum of [${numbers}] --> ${arraySum(numbers)}`);
console.log(`min of [${numbers}] --> ${arrayMin(numbers)}`);
console.log(`max of [${numbers}] --> ${arrayMax(numbers)}`);


// sorting numbers using sortArray
console.log(`sorted of [${numbers}] --> [${sortArray(numbers)}]`);


// using live average fuction
liveAvg(10);        // [10]
liveAvg(15);        // [10, 15]
console.log(`average of [10, 15, 11] --> ${liveAvg(11)}`);      //[10, 15, 11]
liveAvg(12);        //[10, 15, 11, 12]
console.log(`average of [10, 15, 11, 12, 5] --> ${liveAvg(5)}`);      //[10, 15, 11, 12, 5]


// using bad fibo function to calculate fibonachi series
let start = Date.now();
let response = badFibo(45);
let end = Date.now();

console.log(`badFibo(45) = ${response} --> finished in ${(end - start) / 1000} seconds!`);