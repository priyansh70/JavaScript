// apply and call are approx same 
// apply also use call methods 

// The apply() method is used to write methods, 
// which can be used on different objects. 
// It is different from the function call() because it takes arguments as an array.


let about = function(hobby,favFranchise){
    console.log(`User Name is ${this.firstName} and the Age is ${this.age} and User Hobby is -> ${hobby} and favorite Franchise is : ${favFranchise}`);
}

const user = {
    firstName: "Priyansh",
    age : 18,
};

// about.call(user,"Problem Solver","RCB");
about.apply(user,["Problem Solving","RCB"]); // we give array
