/*
44. Sandwiches:
Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
// arrayy as a parameter
function SandwichItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want sandwich of ".concat(items);
}
;
var collection1 = SandwichItems("cucumber", " Cheeze", " Lettuce"); // can add as many items as you wish
var collection2 = SandwichItems("Turkey", " Swiss");
var collection3 = SandwichItems(); // without argument
console.log(collection1);
console.log(collection2);
console.log(collection3);
