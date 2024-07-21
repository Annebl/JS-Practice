function countVowels(str) {
    const vowels = "aeiouyAOIOUY";
    const vowelsSplit = vowels.split('');
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if(vowelsSplit.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("I learn JavaScript."));






