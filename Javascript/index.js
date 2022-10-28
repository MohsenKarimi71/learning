import {
    arraySum,
    arrayMin,
    arrayMax,
    sortArray
} from './tools.js';


const numbers = [1, -2, 3, 4, 12, 0, -5, 8, 12];

console.log(`sum of [${numbers}] --> ${arraySum(numbers)}`);
console.log(`min of [${numbers}] --> ${arrayMin(numbers)}`);
console.log(`max of [${numbers}] --> ${arrayMax(numbers)}`);

// sorting numbers using sortArray
console.log(`sorted of [${numbers}] --> [${sortArray(numbers)}]`);