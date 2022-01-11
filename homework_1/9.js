var arr = [1, 2, 3, 4, 5, 6];


while (true) {
    let isSorted = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            isSorted = false;
            let tmp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
        }
    }
    if (isSorted) break;
}

console.log(arr);