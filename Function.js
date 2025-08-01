function functionName() {
    console.log("Welcome to ked techology");
    console.log("visit on my youtube channel");
}

functionName();


function checkVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }

    return count;
}

let count = checkVowels("Keds Technology");
console.log(count);



let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num * num);
});


let num = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArry = num.filter((num) => {
    return num % 2 == 0;
});
console.log(evenArry);








let marks = [97, 64, 32, 49, 99, 96, 86];
let max = marks.filter((marks) => {
    return marks > 90;
});
console.log(max);




let n = prompt("Enter a number : ");
n = Number(n);
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

