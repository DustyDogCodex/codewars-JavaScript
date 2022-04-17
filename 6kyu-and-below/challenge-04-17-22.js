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

/* Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let starting_age = (dadYearsOld - sonYearsOld)
  let req_age = 0
  let age = 0
  for(let dads_age = starting_age; dads_age <= 100; dads_age++){ //
    if(dads_age == 2*age){
      req_age = dads_age
    }
    age++
  }
  return (req_age - dadYearsOld) < 0 ? -(req_age - dadYearsOld) : (req_age - dadYearsOld)
}
