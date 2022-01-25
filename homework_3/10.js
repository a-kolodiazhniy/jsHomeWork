const arr = [1, 2, 3];

function reverse(arr) {
    if (!Array.isArray(arr)) throw new Error('Error: 1st argument must be an array');
    if (!arr.length) throw new Error('Error: array must be not empty');

    let oldArray = arr.slice(0);
    for (let i = oldArray.length - 1; i >= 0; i--) arr[arr.length - i - 1] = oldArray[i];

    return arr;
}

reverse(arr);

console.log(arr);