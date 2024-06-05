/*
40. Album:
Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artist, album) {
    return { artist: artist, album: album };
}
;
// make three dictionaries representing different albums. 
var album1 = make_album("Amir Ali", "Top Hits");
var album2 = make_album("Fahad Hussain", "Fahad Classics");
var album3 = make_album("Sherin", "Continental Music");
console.log(album1);
console.log(album2);
console.log(album3);
// Adding an optional parameter No. of tracks
function make_album2(artist, album, numberOfTracks) {
    return { artist: artist, album: album, numberOfTracks: numberOfTracks };
}
;
// make three dictionaries representing different albums. 
var album4 = make_album2("Amir Ali", "Top Hits", 40);
var album5 = make_album2("Fahad Hussain", "Fahad abc", 50);
var album6 = make_album2("Sherin", "Cont. Music", 30);
console.log(album4);
console.log(album5);
console.log(album6);
