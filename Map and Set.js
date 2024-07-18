let john = { name: "John"};
let visitsCountMap = new Map();

visitsCountMap.set(john, "visits");
console.log(visitsCountMap.get(john));

// Iteration over Map

let recipeMap = new Map([
    ['cucumbers', 500],
    ['tomatoes', 350],
    ['onion', 50]
    ]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}
for (let amount of recipeMap.values()) {
    console.log(amount);
}

let listOfNames = new Map([
    ['Anna', 30],
    ['Oleksii', 20],
    ['Mykola', 35]
    ]);
for (let name of listOfNames.keys()) {
    console.log(name);
}

for (let age of listOfNames.values()) {
    console.log(age);
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

listOfNames.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

// Object.entries: Map from Object

let obj = {
    name: 'Anna',
    age: 20
};

let map = new Map(Object.entries(obj));
console.log(map.get('age'));

// Object from Map

let prices = Object.fromEntries([
    ['tomatoes', 50],
    ['onion', 30],
    ['potatoes', 40]
]);

console.log(prices.onion);

let map1 = new Map();
map1.set('tomatoes', 50);
map1.set('onion', 30);
map1.set('potatoes', 50);

let obj1 = Object.fromEntries(map1.entries());

console.log(obj1.potatoes);

// Set

let set = new Set();

let anna = {name: 'Anna'};
let oleksii = {name: 'Oleksii'};
let olga = {name: 'Olga'};


set.add(anna);
set.add(oleksii);
set.add(oleksii);
set.add(anna);
set.add(olga);
set.add(anna);

console.log(set.size); // 3

for (let user of set) {
    console.log(user.name);
}

// Iteration over Set

let set1 = new Set(["tomatoes", "onion", "potatoes"]);

for(let value of set1) console.log(value);

// forEach

set1.forEach((value) => {
    console.log(value);
});

// WeakMap

let visitsCountMap1 = new WeakMap();

function countUser(user) {
    let count = visitsCountMap1.get(user) || 0;
    visitsCountMap1.set(user, count +1);
}

// WeakSet

let visitedSet = new WeakSet();

let peter = {name: 'Peter'};
let jack = {name: 'Jack'};
let mary = {name: 'Mary'};

visitedSet.add(peter);
visitedSet.add(jack);
visitedSet.add(peter);

console.log(visitedSet.has(jack)); // true
console.log(visitedSet.has(mary)); // false

//


