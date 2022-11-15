let input = 'turpentine and turtles';
const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
let resultArray = [];
let resultString = '';

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
        if(input[i] === vowels[j])
            resultArray.push(vowels[j]);
    }
}

for(let i = 0; i < resultArray.length; i++) {
    if(resultArray[i] === 'e' || resultArray[i] === 'u') {
        resultString += resultArray[i].toUpperCase();
        resultString += resultArray[i].toUpperCase();
    }
    else
        resultString += resultArray[i].toUpperCase();
}

console.log(resultString);