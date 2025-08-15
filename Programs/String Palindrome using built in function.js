const prompt = require('prompt-sync')();

const str  = prompt("Enter a string : ");

const reversed = str.split("").reverse().join("");

if(str === reversed)
{
    console.log("Is Palindrome");
}
else
{
    console.log("is not palindrome");
}