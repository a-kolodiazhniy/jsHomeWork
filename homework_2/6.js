const isEven = num => {
    if (typeof num !== 'number') throw new Error('Error: parameter type is not a Number');
    return num % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));