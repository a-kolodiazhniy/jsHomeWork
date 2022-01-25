function arrayFill(value, length) {
    const types = ["string", "number", "object"];
    if (!types.includes(typeof value)) throw new Error('Error: 1st argument must be such types: ' + types.join(", ") + ", array");

    return new Array(length).fill(value);
    /*** 
        let result = [];
        for (let i = 0; i < length; i++) {
            result.push(value);
        }
        return result;
    ***/
}


console.log(arrayFill('x', 5));