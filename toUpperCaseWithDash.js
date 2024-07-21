function toUpperCaseWithDash(str) {
    return str.toUpperCase().split('').join('-');
}

console.log(toUpperCaseWithDash("January"));