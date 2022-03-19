// Hoisting 

// By function Declaration we can call any function by its initialization

hello(); //Hello World
function hello()
{
    console.log("Hello World");
}

// But in function Expression we have to first create function and then we can call it before we call it then we face error 

/* myName(); // erroe */
const myName = function(){
    console.log("Priyansh");
}
myName(); 

// But in Arrowfunction we have to first create function and then we can call it before we call it then we face error

/* myName1(); //error */
const myName1 = () => console.log("Priyansh");
myName1();