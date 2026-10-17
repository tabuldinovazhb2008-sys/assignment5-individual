// TASK 6: 
const fullName = "Tabuldinova Zhansaya";
let age = 18;
const isStudent = true;
let favoriteColour = "green";

console.log("Full name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is student:", isStudent, "| Type:", typeof isStudent);
console.log("Favourite colour:", favoriteColour, "| Type:", typeof favoriteColour);

favoriteColour = "Blue";
console.log("New favourite colour:", favoriteColour);


// TASK 7: 
const userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to my website.");

const myGreeting = "My name is Zhansaya and I am in group MT-2501.";
console.log(myGreeting);


// TASK 8: 
const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);

console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);
console.log("Quotient:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);


// TASK 9: 
const studentName = "Tabuldinova Zhansaya";

console.log("Full name:", studentName);
console.log("Name length:", studentName.length);
console.log("Uppercase:", studentName.toUpperCase());
console.log("Lowercase:", studentName.toLowerCase());
console.log("First three characters:", studentName.slice(0, 3));

const sentencePart1 = "I am learning";
const sentencePart2 = "JavaScript.";
const combinedSentence = sentencePart1 + " " + sentencePart2;

console.log("Combined sentence:", combinedSentence);


// TASK 10: 
let counter = 10;
console.log("Starting value:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);


// TASK 11:
let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years.");

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years.");


// TASK 12: 
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Saya");
greetUser("Bibi");

function calculateSum(a, b) {
    return a + b;
}
console.log("Sum of 3 and 7:", calculateSum(3, 7));
console.log("Sum of 10 and 20:", calculateSum(10, 20));

function calculateRectangleArea(width, height) {
    return width * height;
}
console.log("Rectangle area (5 x 4):", calculateRectangleArea(5, 4));
console.log("Rectangle area (8 x 3):", calculateRectangleArea(8, 3));