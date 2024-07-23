function isValidEmail(str) {
    if (str.includes('.') || str.includes('.')) {
        return true;
    } else {
        console.log('Invalid email format');
    }
}

console.log(isValidEmail("january@gmail.com"));
console.log(isValidEmail("january1gmail.com"));
console.log(isValidEmail("january@gmailcom"));