function capitalizeSentences(str) {
    return str.split('. ').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('. ');
}

console.log(capitalizeSentences("hello world. this is a test."));
