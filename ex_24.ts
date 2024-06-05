/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

// testing equality and inequality

// let myName = "Arbaz";
// console.log(myName == "Arbaz");     // true
// console.log(myName !== "arbaz")     // true (because ! before == sign mean is not equal to)

// // numbers

// let myNumber = 10;
// console.log(myNumber == 10);          // true
// console.log(myNumber !== 10);         // false
// console.log(myNumber > 5);            // true
// console.log(myNumber < 5);            // false
// console.log(myNumber <= 5);            // false
// console.log(myNumber >= 5);            // true



// for and we use double && sign =======and for or we use  || (pipe)

let num1 = 10;
let num2 = 5;

console.log(num1 > 9 && num2 < 5);      // (false statement) because one is true and one is false

console.log(num1 > 9 || num2 < 5);    // overall result is true      
        //true stat     false stat.

//• Test whether an item is in a array
// • Test whether an item is not in a array

let myArray = [2, 3, "Ali"];
let myString = "Yasir";

console.log(Array.isArray(myArray));        //true
console.log(Array.isArray(myString));       //false




