// Daily Challenge: Anagram

// Instructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.


//not super efficient but working solution


//pattern that matches all characters which are not letters
let regex = /[^A-Za-z]/g;

function isAnagram(string1, string2) {
    //get rid of any spaces and characters
    string1 = string1.replace(regex, '');
    string2 = string2.replace(regex, '');
    // if the the length of both of the strings is not equal they cannot be anagrams
    if (string1.length !== string2.length) return false;
    // sort
    else {
        string1 = string1.toLowerCase().split('').sort().join('')
        string2 = string2.toLowerCase().split('').sort().join('');
        //compare
        if (string1 === string2) return true;
    }
    //didn't return true - must be false
    return false;
}

// console.log(isAnagram('Moon starer', 'Astronomer'));
// console.log(isAnagram('Moon walker', 'Astronomer'));
// console.log(isAnagram('Moon\' star778920er', 'Astronome34516789`]191892378r'));
// console.log(isAnagram('School master', 'The classroom'));
// console.log(isAnagram('I\'m Lera', 'Lerima'));