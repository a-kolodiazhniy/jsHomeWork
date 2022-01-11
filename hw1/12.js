let arr = [1, 2, 3, -5, -2, 1, -4],
    sum = 0;

for (el of arr) {
    sum += el > 0 ? el : 0;
}

console.log('sum:', sum);