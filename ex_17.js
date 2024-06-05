/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
var myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Anwar", "Ayyaz"];
console.log("\n Dear friends accept my appologies, that table is not available for 6 and only available for 2, so I've to invite only of 2 friends");
// remove all 4 last elements
// let friend1 = myFriends.pop();
// console.log(`\n Sorry my friend Mr. ${friend1} your invitation has been cancelled.`);
// let friend2 = myFriends.pop();
// console.log(`\n Sorry my friend Mr. ${friend2} your invitation has been cancelled.`);
// let friend3 = myFriends.pop();
// console.log(`\n Sorry my friend Mr. ${friend3} your invitation has been cancelled.`);
// let friend4 = myFriends.pop();
// console.log(`\n Sorry my friend Mr. ${friend4} your invitation has been cancelled.`);
// for(let i = 0; i < myFriends.length; i++){
//     console.log(`Mr. ${myFriends[i]} you are still invited`);
// }
// another way to do this exercise
var friend1 = myFriends.pop();
var friend2 = myFriends.pop();
var friend3 = myFriends.pop();
var friend4 = myFriends.pop();
console.log("\n Sorry Mr. ".concat(friend1, ", Mr. ").concat(friend2, ", Mr. ").concat(friend3, ", & Mr. ").concat(friend4, " your invitations have been cancelled."));
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are still invited"));
}
