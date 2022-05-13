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

/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
 */

String.prototype.toAlternatingCase = function () {
  // Define your method here :
  let str = this.toString()
  const letter_array = str.split('')
  const result = []
  letter_array.forEach((letter,index) => {
    if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91){
      result.push(letter.toLowerCase())
    } else if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123){
      result.push(letter.toUpperCase())
    } else {
      result.push(letter)
    }
  })
  return result.join('')
}
