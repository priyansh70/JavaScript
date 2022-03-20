// Optional Chaining :-

// The optional chaining ‘?.’ is an error-proof way to access nested object properties, 
// even if an intermediate property doesn’t exist.

const user = {
    firstName : "Priyansh",
    // Adderss : {"houseNumber" : 123456},
    number : {"Phone":415897}
}

console.log(user.firstName);
// console.log(user.Adderss.houseNumber); //error
// Error because adderss doest't Exist in user


// if we use ?.(optioal Chaining) then instead of error we see "undefined"
console.log(user.Adderss?.houseNumber); 