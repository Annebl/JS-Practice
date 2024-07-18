let prices = {
    meat: 3,
    milk: 2,
    bread: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
    );
console.log(doublePrices);

// Task 1

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

console.log(sumSalaries(salaries));

// Task 2

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
