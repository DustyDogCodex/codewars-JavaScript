/* Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number */

function validateCode (code) {
//your code here
  const num_array = code.toString().split('')
  return Number(num_array[0]) == 1 || Number(num_array[0]) == 2 || Number(num_array[0]) == 3
}