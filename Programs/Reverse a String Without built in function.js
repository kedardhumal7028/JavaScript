// function ReversedString(str)
// {
//     let  reversed = "";

//     for(let i = str.length - 1; i >= 0; i--)
//     {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(ReversedString("hello"));

const prompt = require('prompt-sync')();

const input = prompt("Enter a string: ");

let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}

console.log("Reversed string: " + reversed);
