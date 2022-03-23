// ProtoType in Java Script 

// JavaScript Function ==> function + Object
// Prove 

function hello(){
    console.log("Hello Priyansh");
}
// we access function name like object
console.log(hello.name); //name

// you can add your properties 
hello.myProperties = "Hii";

//we add properties like object in function
console.log(hello.myProperties);

// function provides more usefull properties
// 1 - Name property --> tells function Name

// console.log(hello.prototype); //{}
// only function provides prototype property
// prove -->

if(hello.prototype)
{
    console.log("Prototype is present"); //present
}
else
{
    console.log("Prototype is present");
}
// we can add our properties in prototype
hello.prototype.abc = "abc";
// we can add function in properties 
hello.prototype.sing = function() {
    return "Despacito.......";
}
console.log(hello.prototype.sing());