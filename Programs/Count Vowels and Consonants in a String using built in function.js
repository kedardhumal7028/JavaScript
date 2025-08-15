const prompt = require('prompt-sync')();

const str = prompt("Enter a String: ").toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) 
{
    if (/^[a-z]$/.test(str[i])) 
        {
        if ("aeiou".includes(str[i])) 
        {
            vowels++;
        } 
        else 
        {
            consonants++;
        }
    }
}

console.log("Vowels     : " + vowels);
console.log("Consonants : " + consonants);
