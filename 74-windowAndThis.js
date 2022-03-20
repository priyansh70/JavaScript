// this keyword 
// console.log(this); - same
// console.log(window) - same
// console.log(this===window); //true

// "use strict" 
function myFunc(){
    "use strict" 
    console.log(this);
}
myFunc(); //if we use "use strict" then doesn't print this 

// func = () =>{
//     console.log("Hello Priyansh");
// }
// func();
// window.func();  //also print same 
// this.func();    //also print same 


