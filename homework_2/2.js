const f = (...rest) => {
    if (rest.some(el => typeof el !== 'number')) throw new Error('Error: all parameters type should be a Number');
    return rest.reduce((a, el) => a + el);
}

console.log(f(1, 2, 3));
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));
console.log(f(1, 2, 's', 4));