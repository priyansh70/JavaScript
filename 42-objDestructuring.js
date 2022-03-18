// Object Destructuring 
const band = 
{
    bandName : "Sanam",
    famousSong : "Lag Jaa Gale",
    singerName : "Sanam Puri",
    anotherFamousSong : "Mere Mehboob"
};

// without using destructuring 
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log("Band Name is : "+var1);
// console.log("Famous Song is : "+var2);

// with use destructuring 
const {bandName,famousSong:var2,anotherFamousSong,...restProperties} = band;
console.log("Band Name is : "+bandName);
console.log("Famous Song is : "+var2);
console.log("Another Famous Song is : "+anotherFamousSong);
console.log(restProperties)