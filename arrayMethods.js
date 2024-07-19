//Splice method

let arr1 = ["I", "study", "JavaScript"];
arr1.splice(2, 1);
console.log(arr1); // From index 2 remove 1 element

let arr2 = ["Let's", "study", "JavaScript"];
arr2.splice(1, 2, "take", "a break");
console.log(arr2); // From index 1 remove 2 elements and add "take", "a break"

let arr3 = ["I", "study", "JavaScript"];
arr3.splice(2, 0, "complex", "language");
console.log(arr3); // From index 2 remove 0 elements and insert "complex", "language"

let arr4 = [1, 2, 5, 6];
arr4.splice(-2, 0, 3, 4);
console.log(arr4); // From 2 steps from the end remove 0 elements, insert 3, 4

// Slice method

let arr5 = ["T", "E", "S", "A", "F", "G", "H", "I"];
console.log(arr5.slice(1, 4)); // From element 1 until the 4th element (not including the 4th element)

// Concat

let arr7 = ["I", "study", "JavaScript"];

let arr7Copy = {
    0: "all",
    1: "day long",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr7.concat(arr7Copy));

// ForEach

["apple", "banana", "pear"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} from ${array.length} elements`);
});

// Searching in array
console.log((arr1).indexOf("study"));

console.log(arr4.includes(7));

let users = [
    {id: 1, name: "Oleksii"},
    {id: 2, name: "Anna"},
    {id: 3, name: "Yuliia"},
    {id: 4, name: "Vitalii"}
];
let user = users.find(item => item.id === 2);
console.log(user.name);

// Map
let lengths = ["Oleksii", "Anna", "Yuliia"].map(item => item.length);
console.log(lengths);

// Sort
function compareNumeric (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
}

let arr8 = [2, 5, 3, 4, 1];
arr8.sort(compareNumeric);
console.log(arr8);

let countries = ["Ukraine", "Canada", "Poland", "USA"];
console.log(countries.sort( (a, b) => a.localeCompare(b)));







