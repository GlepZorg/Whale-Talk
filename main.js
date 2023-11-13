// String to be converted to whale talk
let input = 'whale talk';
// Whales only speak in vowels this is an array to hold their language capacity.
const vowels = ['a','e','i','o','u'];
// Array to store language conversion.
const resultArray = [];
// for loop with inner foor loop to seek out comperison between string array and vowel array.
for(let i = 0; i<input.length; i++){
    if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
    }
    for(let ii = 0; ii<vowels.length;ii++){
        if(input[i] === vowels[ii]){
            resultArray.push(vowels[ii]);
        }
    }
}
let resultString = resultArray.join();
console.log(resultString);