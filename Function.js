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