let nums = ["Keds", "Anu", "Rohit", "Pranit"];
console.log(nums);

let marks = [35,70,90,80,75];
console.log(marks);

console.log(nums.length);
console.log(marks.length);

console.log(marks[2]);
console.log(nums[1]);

let heros = ["Batman", "Spiderman", "Supperman", "Thor", "Hulk", "Shaktiman", "antman"];
for(let i = 0; i < heros.length; i++)
{
    console.log(heros[i]);
}


let city = ["karad", "Patan", "Satara", "Pune", "Mumbai"];
for(let item of city)
{
    console.log(item);
}

let village = ["karad", "Patan", "Satara", "Pune", "Mumbai"];
for(let item of village)
{
    console.log(item.toUpperCase());
}
for(let item of village)
{
    console.log(item.toLowerCase());
}

let marks2 = [85,97,44,37,76,60];

let avg = 0;
let sum = 0;

for(let i = 0; i < marks2.length; i++)
{
    sum = sum + marks2[i];
}

avg = sum / marks2.length;

console.log("average is : " + avg);


let price = [250,645,300,900,50]
let offer = 0;

for(let i = 0; i < price.length; i++)
{
    offer = price[i] / 10;

    price[i] = price[i]  - offer; 

    console.log("offerprice is : " + price[i]);
}


let items = ["banana", "potato", "tomato", "apple"];

console.log(items);
items.push("Mango");
console.log(items);

items.pop();
console.log(items);

// items.toString();
console.log(items.toString());

let hero = ["batman", "spiderman", "shaktiman"];
let actor = ["sharukh", "salman", "roshan"];

let concat = hero.concat(actor);
console.log(concat);

let actors = ["catrina", "kajal", "karina"];
actors.unshift("dipika");
console.log(actors);


actors.shift();
console.log(actors);


let actors1 = ["catrina", "kajal", "karina", "batman", "spiderman", "shaktiman"];

console.log(actors1.slice(1,3));


let number = [35,70,90,80,75];
console.log(number); 
number.splice(2, 2, 101, 102)
console.log(number); 


let companies = ["bloomberg","microsoft","uber","ibm","netflix"];
companies.shift();
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);