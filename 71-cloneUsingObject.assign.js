// Clone using Object.assign 
const obj = {
    key1: "Value1",
    key2: "Value2",
};

const obj1 = obj;

console.log("Print Obj: ",obj);
console.log("Print Obj1: ",obj1);

// add new pair in obj 
obj.key3 = "value3";
console.log("Print Obj: ",obj); // console.log("Print Obj1: ",obj1) //this value also add in obj1

// so we clone object by using spreadOperator/Object.assign method

// spread Operator 
// const obj2 = {...obj};
// // console.log("Print obj : ", obj);
// // console.log("Print obj2 : ", obj2);
// obj.key4 = "value4";

// console.log("Print obj : ", obj);
// console.log("Print obj2 : ", obj2);

// Object.assign()
const obj3 = Object.assign({},obj);
obj.key5 = "value5";
console.log("Print obj : ", obj);
console.log("Print obj3 : ", obj3);
