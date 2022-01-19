function solution(a, b) {
    a.reverse();
    b.reverse();
    if (a.length > b.length) {
        return shiftNum(a.map((v, i) => {
            return v + (b[i] || 0);
        }).reverse())
    } else {
        return shiftNum(b.map((v, i) => {
            return v + (a[i] || 0);
        }).reverse())
    }
}

function shiftNum(a, b = [], num = 0) {
    if (a.length === 0) {
        if (num > 0) b.unshift(num);
        return b;
    };
    let last = a.pop();
    last += num;
    if (last < 10) {
        b.unshift(last);
        return shiftNum(a, b);
    } else {
        b.unshift(last % 10);
        return shiftNum(a, b, Math.floor(last / 10));
    }
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9, 9, 9], [9, 9, 9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1])); // // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]