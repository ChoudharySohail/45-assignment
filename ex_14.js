/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Anwar", "Ayyaz"];
// 1st. method with loop
//for(let i = 0; i < myFriends.length; i++){
//  console.log(`Mr. ${myFriends[i]}! you are invited to my dinner on Monday\n`);
//}
// 2nd method map
myFriends.map(function (ib) {
    console.log("Mr. ".concat(ib, "! you are invited to my dinner party on Monday\n"));
});
