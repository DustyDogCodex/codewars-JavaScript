/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

function squareDigits(num){
  let num_array = num.toString().split('')
  let final_string = ''
  num_array.forEach(num => {
    final_string += num * num   
  })
  return Number(final_string);
}

/* Write a function which converts the input string to uppercase. */

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

const maps = x => x.map(num => num *2)