// Callback Function 
/*
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/
function myFunc2()
{
    console.log("This is myFunc2");
}

function myFunc(a)
{
    console.log("This is myFunc")
    a();
}

myFunc(myFunc2)