// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing.

function isPalindrome(str){
    var word = str;
    // console.log(word)
    var newWord = word.split(",").join("")
    // console.log(newWord)
    var newWord1 = newWord.split(" ").join("").toLowerCase()
    // console.log(newWord1)
    for(var i = 0 ; i<newWord1.length/2 ; i++){
        // console.log(newWord1[newWord1.length-1-i]);
        // console.log(newWord1[i]);
        if(newWord1[i] !== newWord1[newWord1.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('Hello World, Guys'));
console.log(isPalindrome('Hello olleh'));   
console.log(isPalindrome('A nut for a jar of tuna'));