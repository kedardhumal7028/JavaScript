for(var i=4; i<=8; i++)  
    {  
        var str="";  // Initialize an empty string in each iteration of outer loop
    
        for(var j=10; j<=i+6; j++)  
        {  
            str = str + "*";  // Append "*" to the string
        }  
    
        console.log(str);  // Print the string after inner loop completes
    }
    