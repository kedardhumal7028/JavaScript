const prompt = require('prompt-sync')();

const input = prompt("Enter a string: ");

let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}

console.log("Reversed string: " + reversed);
