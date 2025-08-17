function reverseString(str)
{
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        revStr =  revStr + str[i];
    }

    console.log(revStr);
}

// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);
reverseString("Kedar");