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


