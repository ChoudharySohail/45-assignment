/*
Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
var magicianNames = ["Ahmed", "Asif", "Abid", "Nomy"];
function show_magician() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician = magicianNames_1[_i];
        console.log(magician);
    }
}
