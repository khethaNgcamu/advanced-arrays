/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // Your code here
    let sent = sentence.split(" ");
    let longest = " ";

    sent.forEach(element => {
        if(element.length > longest.length){
            longest = element;
        }
    });

    return longest;
};

// Your code here

//with reduce

// function longestWord(sentence) {
//     const words = sentence.split(" ");
    
//     return words.reduce(function(longest, current) {
//         return current.length > longest.length ? current : longest;
//     }, "");
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
