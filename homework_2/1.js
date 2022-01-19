const f = n => {
    if (typeof n !== 'number') throw new Error('Error: parameter type is not a Number');
    return n ** 3;
}

console.log(f(2));