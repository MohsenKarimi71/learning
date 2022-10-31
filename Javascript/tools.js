// some functions to deal with arrays using reduce method

const arraySum = (arr) => arr.reduce((t, v) => t + v);


const arrayMin = (arr) => arr.reduce((t, v) => t > v ? v : t);


const arrayMax = (arr) => arr.reduce((t, v) => t > v ? t : v);


const sortArray = function (arr) {
    const sorted = [];
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let min_index = 0;
        let min_value;
        let temp;
        min_value = arr.slice(i).reduce((t, v, index) => {
            if (t > v) {
                t = v;
                min_index = index;
            }
            return t
        })

        temp = arr[i];
        arr[i] = min_value;
        arr[min_index + i] = temp;
    }

    return arr;
}


const _liveAvgWrapper = function() {
    let numbers = [];

    return function(new_value) {
        numbers.push(new_value);
        let sum = numbers.reduce((t,v) => t+v);
        return sum / numbers.length
    }
}
const liveAvg = _liveAvgWrapper()


const badFibo = function(n) {
    if (n < 0) {
        return "input number can not be negative!";
    } else if (n > 45) {
        return "This is a bad fibo function!, So don't try it with numbers more than 45 ):";
    } else {
        if (n < 2) {
            return n
        }
        else {
            return badFibo(n-1) + badFibo(n-2);
        }
    }
}


export {
    arraySum,
    arrayMin,
    arrayMax,
    sortArray,
    liveAvg,
    badFibo
}