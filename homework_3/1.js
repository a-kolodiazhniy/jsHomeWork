const arr = [1, 2, 3];

function forEach(arr, callback) {
    if (!Array.isArray(arr)) throw new Error('Error: 1st argument must be an array');
    if (typeof callback !== 'function') throw new Error('Error: 2st argument must be an function');

    for (let i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}

forEach(arr, function (item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr);
});