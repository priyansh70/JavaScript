// Rest Parameters 

// function myFunc(a,b,c)
// {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(1,2,6,4,7,9,5) //there i give 7 value but our function can take only 3 values


/*
// now remaining element become array and store in d
function myFunc(a,b,c,...d)
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log("d is : ",d);
}
myFunc(1,2,6,4,7,9,5); 
*/

function addAll(...a)
{
    let sum = 0;
    for(let i = 0;i<a.length;i++)
    {
        sum += a[i];
    }
    return sum;
}
console.log(addAll(1,56,48,32,13));
