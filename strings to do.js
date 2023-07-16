

// REMOVE BLANKS
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

// console.log("sharif")


function removeBlanks(str) {
    let newStr = ''
    for (let char in str) {
        if (str[char] != ' ') {
            newStr += str[char]
        }
    }
    return newStr
}

console.log(removeBlanks(" my name is riff"))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))



// GET DIGITS

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
    let numStr = ''
    for (let char in str) {
        if (!isNaN(str[char])) {
            numStr += str[char]
        }
    }
    return Number(numStr)
}

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))



// ACRONYMS

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".


function accronymGen(str) {
    let wordArray = str.split(' ')
    let acronymStr = ''

    for (let word in wordArray) {
        if (wordArray[word].length > 0) {
            acronymStr += wordArray[word][0].toUpperCase()
        }
    }

    return acronymStr
}

console.log(accronymGen(" there's no free lunch - gotta pay yer way. "))




// COUNT NON SPACES
// Create a function that, given a string, returns the number of non-space characters found in the string. 
// Examples:
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


function countNonSpaces(str) {
    let cont = 0

    for (let char in str) {
        if (str[char] != ' ') {
            cont++
        }
    }

    return cont
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))




// REMOVE SHORTER STRINGS
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
// Examples:
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']