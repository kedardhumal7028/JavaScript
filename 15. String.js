let str = "Keds Tech";

console.log(str);

let len = str.length
console.log(len);

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);

//remove only starting and ending  white spaces using trim
let str1 = "   Keds Tech   ";

let trim = str1.trim(" ");
console.log(trim);

//return the part of string

let part = str.slice(2,7);
console.log(part);

//join two strings
let joinstring = str.concat(str1)
console.log(joinstring);

//Search and Replace String 

let SearchorReplace = str.replace("Tech","Technology");
console.log(SearchorReplace);

let find = str.charAt(2);
console.log(find);