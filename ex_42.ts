/*
42. Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicianNames = ["Ahmed", "Asif", "Abid", "Nomy"];

function show_magicians(greet: string){
    for(let items of magicianNames){
        console.log(greet, items);

    }
};
show_magicians("Hello, How are you Mr. ");
show_magicians("Hello,  ");