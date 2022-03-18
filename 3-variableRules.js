// Rules for Naming Variables

// 1 - You can not start with numeber
// example :-
// 1value (Invalid)
// value1 (value)

var value1 = 2;
console.log(value1); //print value
console.log(value1 ** 2) //square of value
console.log(value1 ** 0.5) //Square root of value

//2 - You can use underscore _ and dollar $ symbol only in special symbol
// Example :- 
// first_Name (valid)
// first$Name (valid)
// $firstName (valid)
// _firstName (valid)

var _first$Name = "Priyansh";
var $last_Name  = "Patel";

console.log(_first$Name +" " +$last_Name);
// console.log(_first$Name);
// console.log($last_Name);

// 3 - You can not use Spaces
// example :- 
// var first name = "Priyansh" (Invalid)

var first_name = "Priyansh";  //(Snake Case Writing)
var firstName = "Priyansh";  //(Camel Case Writing)

// Convention for naming
// Start with small letter and use camelCase