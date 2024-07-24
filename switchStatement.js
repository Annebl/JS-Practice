let isName = prompt('What is my name?', 'A _ _ _');

switch(isName) {
    case 'Alex':
        console.log('I am a girl');
        break;
    case 'Anna':
        console.log('Correct!');
        break;
    default:
        console.log("It's incorrect");
}

// Rewrite the code using if...else

let browser = prompt('What is your browser?', 'e.g. Chrome');

if (browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Chrome'
    || browser == 'Opera') {
    console.log("Ok, we support these browsers too.");
} else {
    console.log("We hope this page looks ok!");
}

// Switch Statement

switch(browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log("Ok, we support these browsers too.");
        break;

    default:
        console.log("We hope this page looks ok!");
}


