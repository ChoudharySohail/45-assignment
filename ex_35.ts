/*
35. Animals:
Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet.

• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

let animals = ["dog", "wolf", "leopard"];

for (let i=0; i < animals.length; i++);
console.log(animals);

// another method of printing only names of array

for (let i of animals){
    console.log(i);
}
    console.log(`${animals} are carnivorous`);

console.log(`\n ${animals} are carnivorous who eat meat and other animals but ${animals[0]}is a great pet, but ${animals[1]}, and ${animals[2]} some people keep as pet too, but they are wild and dangerous.`);
