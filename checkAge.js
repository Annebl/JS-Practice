// Solution using '||'

function checkAge(age) {
   return age >= 18 || "Did parents allow you?";
}
console.log(checkAge(18));

// Solution using '?'

function checkAge2(age) {
    return age >= 18 ? true : "Did parents allow you?";
}

console.log(checkAge2(18));
