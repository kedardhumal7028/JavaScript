function validateStackSequences()
{
    const pushed = [1, 2, 3, 4, 5]
    const popped = [4, 5, 3, 2, 1]
    
    const stack = [];
    let j = 0;

    for(let num of pushed)
    {
        stack.push(num);

        while(stack.length && j < popped.length && stack[stack.length - 1] === popped[j])
        {
            stack.pop();
            j++;
        }
    }

   if(stack.length === 0)
   {
        console.log("True");
   }
   else
   {
    console.log("False");
   }
}

validateStackSequences();