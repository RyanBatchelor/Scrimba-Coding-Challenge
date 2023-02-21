/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    /*
    let reversedStr = str.split("").reverse().join("") With built in reverse method
    return reversedStr === str*/
    
    let i = 0
    let right = str.length - 1
    while(i < right){
        if(str[i] !== str[right]){
            return false
        }
        i++
        right--
    }
    return true
    
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
