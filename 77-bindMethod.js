// Bind Method 

// The JavaScript Function bind() method allows an object to borrow method 
// from other object without copying.

//object user1
const user1 = {
name : "Priyansh",
article: "C++"
}
//object user2
const user2 = {
name : "Harshit",
article: "JAVA"
}
	
//object user3
const user3 = {
name : "Ayushman",
article: "Python"
}

function user(){
console.log(this.name+" contributes about "+this.article);
}
		
const printFunc2= user.bind(user1);
//using bind()
// bind() takes the object "user1" as parameter//
printFunc2();
	
const printFunc3= user.bind(user2);
printFunc3();
	
const printFunc4= user.bind(user3);
printFunc4();
//uniquely defines each objects

