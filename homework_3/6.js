const arr = [1, 2, 3];

function reduceRight(arr, callback, accumulator) {
    if (!Array.isArray(arr)) throw new Error('Error: 1st argument must be an array');
    if (typeof callback !== 'function') throw new Error('Error: 2st argument must be an function');
    if (typeof accumulator !== 'number' && typeof accumulator !== 'string') throw new Error('Error: 3st argument must be an function');

    for (let i = arr.length - 1; i >= 0; i--) accumulator = callback(accumulator, arr[i], i, arr);

    return accumulator;
}

console.log(reduceRight(arr, (a, b) => {
    return a - b;
}, 0));