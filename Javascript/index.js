import {
    arraySum,
    arrayMin,
    arrayMax,
    sortArray,
    liveAvg,
    badFibo,
    closureFibo
} from './tools.js';


const numbers = [1, -2, 3, 4, 12, 0, -5, 8, 12];


console.log(`sum of [${numbers}] --> ${arraySum(numbers)}`);
console.log(`min of [${numbers}] --> ${arrayMin(numbers)}`);
console.log(`max of [${numbers}] --> ${arrayMax(numbers)}`);

console.log('**********************************************************');

// sorting numbers using sortArray
console.log(`sorted of [${numbers}] --> [${sortArray(numbers)}]`);

console.log('**********************************************************');

// using live average fuction
liveAvg(10);        // [10]
liveAvg(15);        // [10, 15]
console.log(`average of [10, 15, 11] --> ${liveAvg(11)}`);      //[10, 15, 11]
liveAvg(12);        //[10, 15, 11, 12]
console.log(`average of [10, 15, 11, 12, 5] --> ${liveAvg(5)}`);      //[10, 15, 11, 12, 5]

console.log('**********************************************************');

// using bad fibo function to calculate fibonachi series
let start = Date.now();
let response = badFibo(42);
let end = Date.now();

console.log(`badFibo(42) = ${response} --> finished in ${(end - start) / 1000} seconds!`);


// using fibo function that uses JS closure syntax to implement memoization
// technique to calculate fibonachi series in a more efficient and faster way.
start = Date.now();
response = closureFibo(42);
end = Date.now();

console.log(`closureFibo(42) = ${response} --> finished in ${(end - start) / 1000} seconds!`);

start = Date.now();
response = closureFibo(1400);
end = Date.now();

console.log(`closureFibo(1400) = ${response} --> finished in ${(end - start) / 1000} seconds!`);

console.log('**********************************************************');