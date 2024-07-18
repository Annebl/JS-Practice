let arr = ["John", "Smith"];
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);

// Split

let [firstName1, lastName1] = "Jack Brown".split(' ');
console.log(firstName1);
console.log(lastName1);

// Ignore elements using commas

let [name, , title] = ["Elon", "Musk", "CEO", "Tesla"];
console.log(name, title);

// Assign to anything at the left-side

let user = {};
[user.name, user.lastName] = "Jack Black".split(' ');
console.log(user.name);
console.log(user.lastName);

// Looping with .entries()

let user1 = {
    name: "Mary",
    age: 30
};

for (let [key, value] of Object.entries(user1)) {
    console.log(`${key}: ${value}`);
}

// Swap variables

let guest = "Rose";
let admin = "Peter";

[guest, admin] = [admin, guest];
console.log(`Guest: ${guest}, Admin: ${admin}`);

// The rest

let [guest1, guest2, ...rest] = ["Elena", "Mark", "Jack", "Kate"];
console.log(rest.length);

// Destructurise parameters into variables

let options = {
    items: ["item1", "item2"],
    title: "My Document"
};

function createDocument ({title = "Untitled", items = []}) {
    console.log(`${title}: ${items}`);
}

createDocument(options)



