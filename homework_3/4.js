const arr = [1, 2, 3];
const arr2 = [
    {
        key: 1
    },
    {
        key: 1
    },
    {
        key: 2
    },
    {
        key: 3
    }
];

function some(arr, callback) {
    if (!Array.isArray(arr)) throw new Error('Error: 1st argument must be an array');
    if (typeof callback !== 'function') throw new Error('Error: 2st argument must be an function');

    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return true;
        };
    }

    return result;
}

console.log(some(arr2, function (item, i, arr) {
    return item.key === 4;
}));