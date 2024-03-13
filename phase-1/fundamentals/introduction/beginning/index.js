/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 8, 2024
Created August 21, 2023

*/

// ~ Variables
// -> constants, variables, logging, annotations
const schoolName = "Flatiron School";

console.log(schoolName);
let firstName = "Sakib";
firstName = "Mark";
console.log(firstName);

// ~ Types
// -> undefined, null*, boolean, number, string
let lastName;
console.log(typeof(lastName));
//this undefined means not yet assigned
let numStudents = null;
console.log(typeof(numStudents));
//
const sunny = true;
const rainy = false;
console.log(typeof(sunny));
//boolean = true or false

const numBooks = 5;
//concatenation and interpolation
const topic = "Javascript";
const sentence = `We have ${numBooks}.`;
console.log(sentence);
console.log(sentence + " Isn't that great?");

// ~ Objects
// -> definition, bracket/dot notation, stringify
const cube = {
    volume: 8,
    height: 2,
    width: 2,
    color: "blue"
}
//dot notation
console.log(cube.height);
cube.volume = 10;
console.log(cube.volume);

//bracket notation
console.log(cube["color"]);

console.log(JSON.stringify(cube));

// ~ Arrays
// -> definition, access, modification
const numbers = [5,6,7,8];
//access
console.log(numbers[3]);
console.log(numbers.length);
console.log(numbers);
numbers[2] = 10;
console.log(numbers);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItsunny = true;

if (isItSunny) {
    console.log("It's sunny today!");
} else if (isItRainy) {
    console.log("It's rainy.");
} else {
    console.log(It isn't sunny today :("))
}
    
//ternary
isItSunny ? console.log(It's sunny!") : console.log("It's not sunny.");

const greeting = isItSunny ? "It's sunny!" : "It's not sunny.";
console.log(greeting);


// ~ Functions
// -> name, parameters, body, return, annotations
console.log("Hello!");

function sayHello(name) {
    console.log ("Hello," + name);
}
function sayHello(name) {
    return ("Hello," + name);
} // can't write any code after it 

sayHello("Sakib");

function addOne(number) {
    return number +1
}

/**
 * Greets someone and a mood
 * @param {string} name The person to greet.
 * @param {string} mood The mood I'm in
 * @returns A greeting, in string form.
 */

console.log(addOne(5) + addOne(6));

// -> methods, forEach, callback functions, anonymous functions

//methods cant run on their own,  has to be attached to object or array
console.log("Hello");
const names = ["Sakib", "Zach", "Tiff", "Sarah"];
names.forEach(name => console.log("Hello," + name + "!"));


//we're passing a callback function into the array method forEach()
names.forEach(name, i) => {
    console.log("Hello," + name + "at the index" + i + ".");
}
// ~ Scope
// -> global, local, closures, function hoisting
firstName = "Bob";
//this closure includes localVariable and all global vars
function localScope() {
    const localVariable = "Hi, I'm local!";
    console.log(localVariable);
    return localVariable;
}

const global = localScope();
console.log(localVariable);

function localScope2() {
    console.log(localVariable);
    console.log(firstName);
}


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const numbers = [5,6,7,8];
console.log (sum.numbers);

//or 

function sum(a, b){
    console.log(a+b)
}
sum (5,6);
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

const numbers = [1,2,3];

function double(numbers) {

}
console.log(double(numbers));

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

function simple(){
    let newarr = ["HEY", "BYE", "GUY"];
    return newarr.toString().toLowerCase();
}
console.log(simple())