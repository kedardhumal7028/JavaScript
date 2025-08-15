function isValidParentheses(s) 
{
    if (s.length % 2 === 1) 
    {
        return false;
    }

    let stack = [];
    let match = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) 
    {
        let ch = s[i]; 

        if (ch === '(' || ch === '[' || ch === '{') 
        {
            stack.push(ch);
        } 
        else 
        {
            if (stack.length === 0) 
            {
                return false;
            }

            const top = stack.pop();

            if (top !== match[ch]) 
            {
                return false;
            }
        }
    }

    return stack.length === 0;
}


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the brackets String : ", function (input) {
    let result = isValidParentheses(input);
    console.log("\nFinal Result:", result ? "Valid ✅" : "Invalid ❌");
    readline.close();
});
