const prompt = require('prompt-sync')();

const str = prompt("Enter a string : ");

let vowel = 0;
let consonant = 0;

for(let i = 0; i < str.length; i++)
{
    //if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
    if(str[i] == 'a', 'e', 'o', 'u')
    {
        vowel++;
    }
    else
    {
        consonant++;
    }
}

console.log("Vowels : " + vowel);
console.log("Consonante : " + consonant);

