// For Loop in Array 

let car = ["BMW","Tata","Toyoto"];
// for(let i=0;i<3;i++)
// {
//     console.log(car[i]);
// }

let newArr = [];
console.log("Length of Car Array : ",car.length);
for(let i =0;i<car.length;i++)
{
    newArr[i] = car[i].toUpperCase();
}
console.log(newArr);
