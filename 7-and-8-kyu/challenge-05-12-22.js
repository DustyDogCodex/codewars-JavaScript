/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
 */

function smallEnough(a, limit){
  return a.every(num => num <= limit)
}

/* Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. */

function firstNonConsecutive (arr) {
  let result = null
  arr.forEach((num,index) => {
    if(index > 0 && num != arr[index-1] + 1){
      result = num
    }
  })
  return result
}

/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values. */

function sumOfMinimums(arr) {
  // your code here
  let sum = 0
  arr.forEach(row => {
    sum += Math.min(...row)
  })
  return sum
}

/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

var capitals = function(word) {
	// Write your code here
  let result = []
  const letters = word.split('')
  letters.forEach((letter,index) => {
    if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91){
      result.push(index)
    }
  })
  return result
};
