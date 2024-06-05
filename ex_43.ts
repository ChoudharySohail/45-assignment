/*
Ex. 43
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/
let magicianNames2 = ["Ahmed", "Aamir", "Fahad"];

// making a copy of an array
let magicianNamesCopy = [...magicianNames2];
function show_magicians(Greet: string){
    let withGreetings = "";

    for(let items of magicianNamesCopy){
        withGreetings += `${Greet} ${items}\n`
    }
    return withGreetings; // Explicitly return the concatenated greetings
};
let myGreetings = show_magicians("Hello");
let makeArray  : string[] = myGreetings.split ('\n');
console.log(makeArray);

//print original array
console.log(magicianNames2);


// FROM AI
// let magicianNames2 = ["Ahmed", "Aamir", "Fahad"];

// // Making a copy of the array
// let magicianNamesCopy = [...magicianNames2];

// function show_magicians(Greet: string): string {
//     let withGreetings = "";

//     for (let items of magicianNamesCopy) {
//         withGreetings += `${Greet} ${items}\n`;
//     }

//     return withGreetings; // Explicitly return the concatenated greetings
// }

// let myGreetings = show_magicians("Hello");
// let makeArray: string[] = myGreetings.split('\n'); // Corrected split invocation

// console.log(makeArray);

// // Print original array
// console.log(magicianNames2);

