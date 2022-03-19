/*
A lexical scope in JavaScript means that a
variable defined outside a function can be
accessible inside another function defined after 
the variable declaration. But the opposite is not 
true; the variables defined inside a function 
will not be accessible outside that function.
*/
const myVar = "This is Outside Function Variable";
function myApp()
{
    // const myVar = "This is myApp Variable";
    const myFunc = function(){
        // const myVar = "This is myFunc Variable";
        console.log("Inside myVar\n"+myVar);
    }
    const myFunc2 = () => {
        console.log("Inside myfunc2")
        myFunc();}

    console.log(myVar);
    myFunc2();
}
myApp();