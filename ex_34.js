/*
34. Pizzas:
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.

• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza, you like and then an additional sentence, such as I really love pizza!
*/
var myPizza = ["Mexican Pizza", "Pepproni Pizza", "Chicken Tikka Pizza"];
// STYLE 1-
console.log("\n my favourite piaazas are:");
for (var i = 0; i < myPizza.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myPizza[i]));
}
// STYLE 2-
console.log("\n");
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
// STYLE 3- :
console.log("\n my favourite piaazas are:");
console.log(myPizza);
//2nd requirement of this question
console.log("\n I really like to eat pizzas. Pizzas come in variety of flavours and toppings, allowing individuals to customized it to their taste.");
