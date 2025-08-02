console.log("Hello DOM");
alert("Keds Tech");

let h2 = document.querySelector("h2");
console.dir(h2.innerText); 

h2.innerText = h2.innerText + " from Keds Technology";

let divs = document.querySelectorAll(".box");
console.log(divs);

let index = 1;
for(div of divs)
{
    div.innerText = 'new unique value ${index}';
    index++;  
}

divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";