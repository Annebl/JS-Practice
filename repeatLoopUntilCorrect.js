const prompt = require("prompt-sync")();

let number = 0;

while (true) {
    let input = +prompt('Enter number greater than 100: ', '');
    number = input;
    if (input > 100) break;
}

console.log(number);