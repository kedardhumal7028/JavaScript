const prompt = require('prompt-sync')();

const str = prompt("Enter a string: ");

let res = "";

for (let i = 0; i < str.length; i++) 
{
    if (str[i] !== " ") 
    {
        res += str[i];
    }
}
console.log("Output:", res);
