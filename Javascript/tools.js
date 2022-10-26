// some functions to deal with arrays using reduce method

const arraySum = (arr) => arr.reduce((t, v) => t + v);


const arrayMin = (arr) => arr.reduce((t, v) => t > v ? v : t);


const arrayMax = (arr) => arr.reduce((t, v) => t > v ? t : v);

export {
    arraySum,
    arrayMin,
    arrayMax
}