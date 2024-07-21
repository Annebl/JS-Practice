function findAverageNumber(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(findAverageNumber([0, 1, 2, 3, 4, 5]));