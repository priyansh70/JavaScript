// Array Push Pop 
// 1 - push :- Push always addn element in Last

let fruits = ["apple",'banana','grapes'];
console.log(fruits);

// push mango and orange 
fruits.push("mango");
fruits.push("orange");
console.log(fruits);

//2- pop orange (pop always delete last element)
let poppedFruit = fruits.pop();
console.log("Popped Element --> "+poppedFruit);
console.log(fruits);

// 3 - unshift :- Unshift always add element from starts 
fruits.unshift("Papaya");
console.log(fruits);

// 4 -shift :- shift always delete element from starts 
let removedElement = fruits.shift();
console.log("Shift(Removed) Element --> "+removedElement);
console.log(fruits);

// NOTE :- Push and Pop is Faster than Shift and Unshift
