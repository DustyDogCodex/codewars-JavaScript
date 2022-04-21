/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

 */

function getSum( a,b ){
   //Good luck!
  let start
  let end 
  let sum = 0
  if(a == b){
    return a
  } else if ( a < b){
    start = a
    end = b
  } else {
    start = b
    end = a
  }
  for (let i = start; i <= end; i++){
    sum += i
  }
  return sum
}

/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
  if(input == null || input.length == 0){
    return []
  }
  
  let pos = 0
  let neg = 0 
  input.forEach(num => {
  if(num < 0){
    neg += num
  } else if (num > 0){
    pos++
  }
  })
  return [pos,neg]
}