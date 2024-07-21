function findSmallest(arr) {
    let smallestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr.length) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}

console.log(findSmallest([5,8,3,124, -5, -1, 10, 505]));