"use strict"
// Function Returning Function
function firstFunction(){
    const hello = function()
    {
        console.log("Hello Priyansh");
    }
    return hello;
}

let ans = firstFunction();
// console.log(ans);
ans();