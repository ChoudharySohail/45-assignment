/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, then if block should print a statement, such as You really like bananas!
*/

let favorite_fruits: string [] = ["Apple", "bananas", "Pineapple"]
// if(favorite_fruits.includes("Mango")){
//     console.log("I would like to eat Mange");

// }else if(favorite_fruits.includes("Apple")){
//     console.log("I would like to eat Apple");
    
// }else{
//     console.log(`this fruit is not available!`);

let fruitRequired1 = "Strawberries"; 
if(favorite_fruits.includes(fruitRequired1)){
    console.log(`${fruitRequired1} are available, you really like ${fruitRequired1}`);
    
}
 let fruitRequired2 = "graps";
if (favorite_fruits.includes(fruitRequired2)){
    console.log(`${fruitRequired2} are available, you really like ${fruitRequired2}`);
}
let fruitRequired3 = "bananas";
if (favorite_fruits.includes(fruitRequired3)){
        console.log(`${fruitRequired3} are available, you really like ${fruitRequired3}`);
    
} else {
    console.log(`${fruitRequired1}, ${fruitRequired2}, and ${fruitRequired3} are not available`);
    console.log(`availale fruites are ${favorite_fruits}, you can choose one of them`);

} 
