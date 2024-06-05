/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

const myFriends: string[] = ["Ali", "Ahmed", "Hussain", "Tariq", "Anwar", "Ayyaz"];
console.log(`New list of my friend who is coming to my dinner invitation\n`);
console.log(myFriends);

console.log(`We have 3 more friends to invite on dinner\n`);

//Adding three more friends

// add at beginning
myFriends.unshift("Jawad");
console.log(myFriends);
//["Ali", "Ahmed", "Hussain", "Tariq", "Anwar", "Ayyaz"]

// add at middle
myFriends.splice(4, 0, "Zaviar");
console.log(myFriends);

// add in last
myFriends.push("Hammad");
console.log(myFriends);

// print all friends alongwith message
for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends[i]} you are invited to the dinner`);
}



