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

const animal1 = new Animal("peter",10);
// console.log
// console.log(animal1.eat());
animal1.eat();

// Now Create Dog Class
 
class Dog extends Animal{ //child class
    constructor(name,age,speed)
    {
        super(name,age); // name and age create by Animal class so we use super
        this.speed = speed;
    }
    run(){
        return(`${this.name} can run at the speed of ${this.speed}kmph in the Age ${this.age}`);
    }
}
//we have to set a speed of tommy 
const tommy = new Dog("tommy",2,45);
// console.log(tommy.isSuperCute());
console.log(tommy); // here speed doesn't print because we extends Animal class 
// but there are no speed at Animal so we add a constructor in Dog
console.log(tommy.run());


// class Cat extends Animal{ //child class

// }
// const philely = new Cat("philely",2);
// console.log(philely);