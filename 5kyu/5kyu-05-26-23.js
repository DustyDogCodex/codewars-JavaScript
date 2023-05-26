/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

function firstNonRepeatingLetter(s) {
  // Add your code here
  const str_array = s.split('')
  let result = ''
  let result_index = Infinity
  str_array.forEach((letter,index) => {
    let count = 0
    for(let i = 0; i <= str_array.length - 1; i++){
      if(str_array[i].toLowerCase() == letter.toLowerCase() && i != index){
        count++
      }
    }
    if(count == 0 && index < result_index){
      result = letter
      result_index = index
    }
  })
  return result
}