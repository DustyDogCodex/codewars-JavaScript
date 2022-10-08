/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck! */

function solve(s){
    //..
  let lower_count = 0
  let upper_count = 0
  const char_array = s.split('')
  char_array.forEach(char => {
    char == char.toLowerCase() ? lower_count++ : upper_count++
  })
  return lower_count >= upper_count ? s.toLowerCase() : s.toUpperCase()
}

/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). */

function pillars(numPill, dist, width) {
  // your code here
  return numPill == 1 ? 0 : (numPill-1) * dist * 100 + (numPill-2) * width 
}

/* Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
Notes

    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase. */

function removeRotten(bagOfFruits){
  // ...
  return bagOfFruits ? bagOfFruits.map(fruit => 
    fruit.toLowerCase().replace('rotten','')
  ) : []
}

/* Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d" */

function spacify(str) {
  // return 
  const word_array = str.split(' ')
  return word_array.map(word => word.split('').join(' ')).join('   ')
}

