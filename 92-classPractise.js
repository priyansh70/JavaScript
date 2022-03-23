// Practice of Class 
class Animal{
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

class Dog{
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
const tommy = new Dog("tommy",2);
// console.log(tommy);
console.log(tommy.isSuperCute());

class Cat{
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
const philely = new Cat("philely",2);
console.log(philely);
// console.log(tommy.isSuperCute());

// But if we have 10 different type of animal then we did't creatae class for each we just extends animal class

// Next File we improve this code