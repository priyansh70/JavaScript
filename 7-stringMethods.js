// String Methods
// Strings are can not be change (imutable)

// 1 - trim() 
// 2 - toUpperCase()
// 3 - toLowerCase()
// 4 - slice()

// USE trim() 
let str1 = "     Priyansh    ";
console.log(str1.length);
let newString = str1.trim(); //remove all the spaces

console.log(newString);
console.log(newString.length);

// USE toUpperCase()
let str2  = "priyansh patel";
console.log(str2);
str2 = str2.toUpperCase(); //Converts all string to upperCase
console.log(str2);

// USE toLowerCase()
let str3  = "PRIYANSH";
console.log(str3);
str3 = str3.toLowerCase(); //Converts all string to lowerCase
console.log(str3);

// USE slice()
let str4 = "priyansh";
let newString1 = str4.slice(0,5); //output - priya
console.log(newString1);
let newString2 = str4.slice(4); // output - ansh
console.log(newString2);