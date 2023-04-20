/* Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"

Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"

 */

function grader(score) {
  let result
  if (score > 1 || score < 0.6) {
    result = 'F'
  } else if (score >= 0.9 && score <= 1) {
    result = 'A'
  } else if (score >= 0.8 && score < 0.9) {
    result = 'B'
  } else if (score >= 0.7 && score < 0.8) {
    result = 'C'
  } else if (score >= 0.6 && score < 0.7) {
    result = 'D'
  } 
  return result
}

/* Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.
Notes:

    Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples

// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.' */

function aliasGen(name, lastName){
    // Code Here
  const first_name = name.slice(0,1).toUpperCase()
  const first_lastname = lastName.slice(0,1).toUpperCase()
  
  if((first_name.charCodeAt(0) < 65 || first_name.charCodeAt(0) > 90) || (first_lastname.charCodeAt(0) < 65 || first_lastname.charCodeAt(0) > 90)){
    return "Your name must start with a letter from A - Z."
  } else {
    return `${firstName[first_name]} ${surname[first_lastname]}`
  }
}

/* Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string */

function reverseLetter(str) {
  //coding and coding..
  const str_array = str.split('')
  const final_array = []
  str_array.forEach(letter => {
    if( letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
      final_array.push(letter)
    }
  })
  return final_array.reverse().join('')  
}


