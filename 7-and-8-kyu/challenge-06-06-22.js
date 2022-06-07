/* Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
 */

function sumOfDifferences(arr) {
  let descending_array = arr.sort((a,b) => b - a)
  let sum = 0
  for (let i = 0; i < arr.length - 1; i++){
    sum += descending_array[i] - descending_array[i+1]
  }
  return sum
}

/* Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */

function pipeFix(numbers){
  let final_array = []
  let start = numbers[0]
  let end = numbers[numbers.length-1]
  for(let i = start; i <= end; i++){
    final_array.push(i)
  }
  return final_array
}

/* You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:

calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

Good luck! */

function calculator(a,b,sign){
  if(isNaN(a) || isNaN(b)){
    return "unknown value"
  }
  switch(sign){
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/":
      return a / b
    default:
      return 'unknown value'
  }
}
