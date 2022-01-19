const isPositive = num => {
    if (typeof num !== 'number') throw new Error('Error: parameter type is not a Number');
    return num > 0;
}

const array = [1, 2, -4, 3, -9, -1, 7];
let result = [];

array.forEach(el => {
    if (isPositive(el)) result.push(el);
})

console.log(result);