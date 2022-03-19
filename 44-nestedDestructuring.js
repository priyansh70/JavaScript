// Nested Destructuring

const users = [
    { userId: "u01", name: "Priyansh", gender: "Male" },
    { userId: "u02", name: "Khushi", gender: "Female" },
    { userId: "u03", name: "Harshit", gender: "Male" }
];

// const [user1,user2,user3] = users;
// console.log(user1);

const [{ userId: firstUserId, name }, { name: secondName }, { gender: thirdGender }] = users;

console.log("First User Id : " + firstUserId);
console.log("First User Name : " + name);
console.log("Second User Name : " + secondName);
console.log("Third User Gender : " + thirdGender);

