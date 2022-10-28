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

export {
    arraySum,
    arrayMin,
    arrayMax,
    sortArray,
}