const f = arr => {
    if (!Array.isArray(arr)) throw new Error('Error: parameter type should be an array');
    if (!arr.length) throw new Error("Error: parameter can't be an empty");

    const num = arr.shift();

    if (typeof num !== 'number') throw new Error('Error: parameter type is not a Number');

    console.log(num);

    if (!arr.length) return;
    f(arr);
}

console.log(f([1, 2, 3]));
console.log(f(1, 2, 3));
console.log(f('Content'));
console.log(f([]));