/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
var myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Anwar", "Ayyaz"];
console.log("I am inviting ".concat(myFriends.length, " number of friends to my dinner which are follows \n "));
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
