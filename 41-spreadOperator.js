// Spread Operator 
// const arr1 = [..."123456"];
// console.log(arr1);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key1 : null,
    key3 : "value3",
    key4 : "value4"
}
// console.log(obj1)

const newObject1 = {...obj1,...obj2,key5:"value5"};
console.log(newObject1);

// const newObject2 = {..."Value1"};
// console.log(newObject2);