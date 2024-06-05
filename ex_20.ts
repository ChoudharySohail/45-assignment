/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let mountains: string[] = ["K2", "Himalia", "Nanga Parbat", "Mount Everest"];
console.log(`\n The top most famous mountains of the world are:`);

for(let i = 0; i < mountains.length; i++){
    console.log(`${i+1}. ${mountains[i]}`);
}
// another way of printing a list of an Array without serial number is:

mountains.forEach((ib)=>{
    console.log(ib);
})
