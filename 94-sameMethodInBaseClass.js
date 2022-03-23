// Same Method in Base Class
class Animal{ //parent class / super class
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} eats Food`);
    }
    isSuperCute(){
        return this.age<=2;
    }
}

class Dog extends Animal{ //child class
    constructor(name,age,speed)
    {
        super(name,age); // name and age create by Animal class so we use super
        this.speed = speed;
    }
    eat(){
        console.log(`At this time ${this.name} eating food`);
    }
    run(){
        return(`${this.name} can run at the speed of ${this.speed}kmph in the Age ${this.age}`);
    }
}
//we have to set a speed of tommy 
const tommy = new Dog("tommy",2,45);
console.log(tommy); 
// tommy.eat(); // this is print from Animal calss
// but now we have eat method in dog class so js print dog class eat method

tommy.eat();












// class Cat extends Animal{ //child class

// }
// const philely = new Cat("philely",2);
// console.log(philely);