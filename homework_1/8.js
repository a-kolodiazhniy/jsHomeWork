var arr = [1, 2, 3, 4];
let sum = 0;

for (el of arr) {
    sum += el % 2 === 0 && el > 3 ? el : 0;
}

console.log('sum:', sum);