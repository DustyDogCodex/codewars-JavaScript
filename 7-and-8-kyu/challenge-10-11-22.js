/* Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */

var filterString = function(value) {
  //Complete this function :)
  const component_array = value.split('')
  const result = []
  component_array.forEach(element => {
    isNaN(element) ? '' : result.push(element)
  })
  return +result.join('')
}

/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

function uniTotal (string) {
// total up dem unicodes!
  const str_array = string.split('')
  let sum = 0
  str_array.forEach(letter => {
    sum += letter.charCodeAt(0)
  })
  return sum
}

/* ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.
Examples

"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?" */

function vaporcode(string) {
  const str_array = string.split(' ')
  const dope_vaporwave_array = []
  str_array.forEach(x => {
    const word_array = x.split('')
    word_array.forEach(letter => {
      dope_vaporwave_array.push(letter.toUpperCase())  
      dope_vaporwave_array.push('  ')
    })
  })
  return dope_vaporwave_array.join('').trim()
}


