const array = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
const log = console.log;

function f(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'number') throw new Error('Error: 1st argument must be an array or number');

    if (typeof arr === 'number') {
        return arr;
    } else {
        if (arr.length === 0) return 0;
        if (arr.length === 1) return f(arr[0]);

        return arr.reduce((a, b) => {
            return (f(a) + f(b));
        }) || 0;
    }
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
log(f(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
log(f(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
log(f(arr4)); // 0
const arr5 = [[[[[], 3]]]];
log(f(arr5)); // 3