let evenNumbers = (inputArray) => {
    const evenNumbers =[];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 === 0) {
            evenNumbers.push(inputArray[i]);
        }
    }
    return evenNumbers
}

console.log(evenNumbers([8,4,10,2,3,1,6,5,7]));







