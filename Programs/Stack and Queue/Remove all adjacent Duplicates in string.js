
function RemoveDuplicates(s)
{
    const stack = [];

    for(let i = 0; i < s.length; i++)
    {
        let currentChar = s[i];

        if(stack.length > 0 && stack[stack.length - 1] === currentChar)
        {
            stack.pop();
        }
        else
        {
            stack.push(currentChar);
        }
    }

    let ans = stack.join("");

    console.log(ans);
}

RemoveDuplicates("abbaca");