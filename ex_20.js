/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
var mountains = ["K2", "Himalia", "Nanga Parbat", "Mount Everest"];
console.log("\n The top most famous mountains of the world are:");
for (var i = 0; i < mountains.length; i++) {
    console.log("".concat(i + 1, ". ").concat(mountains[i]));
}
// another way of printing a list of an Array without serial number is:
mountains.forEach(function (ib) {
    console.log(ib);
});
