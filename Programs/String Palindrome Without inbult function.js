
const prompt = require('prompt-sync')();

const str = prompt("Enter a string : ");

strPalindrome(str);

function strPalindrome(str)
{
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--)
    {
        reversed += str[i];
    }

    if(reversed === str)
    {
        console.log("Palindrome");
    }
    else
    {
        console.log("Not Palindrome");
    }
}