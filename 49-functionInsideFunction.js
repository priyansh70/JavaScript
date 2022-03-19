// Function inside Function
function app()
{
    const myFunc = () => console.log("Hello Priyansh");

    const addTwo = (num1,num2) => num1+num2;
    const mulTwo = (num1,num2) => num1*num2;

    console.log("Inside the App");
    myFunc();
    console.log(addTwo(12,23));
}
app();