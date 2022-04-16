/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x){
  let str_array = x.split(' ')
  
  let sum = 0
  let big_word = ''
  str_array.forEach(word => {
    let word_sum = 0
    let word_array = word.split('')
    
    word_array.forEach(letter => {
     word_sum += letter.charCodeAt(letter[0]) - 96 
    })
    
    if(word_sum > sum){
      sum = word_sum
      big_word = word
    }
  })
  return big_word
}

/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

function longest(s1, s2) {
  // your code
  let new_str = s1.concat(s2)
  
  const str_array = new_str.split('')
  let uniq_letters = new Set(str_array)
  let final_array = []
  uniq_letters.forEach(letters => {
    final_array.push(letters)
  })
  let final_word = final_array.sort().join('')
  
  return final_word
}

/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck! */

function doubleChar(str) {
  // Your code here
  let final_str = ''
  let str_array = str.split('')
  str_array.forEach(letter => {
    final_str += letter + letter
  })
  return final_str
}

/* Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

function century(year) {
  if (year % 100 === 0) {
  return Math.floor((year/100))
  } else {
  return Math.floor((year/100)) + 1;
  }
}






