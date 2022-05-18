/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

function stray(numbers) {
  let result = 0
  for(let i = 0; i <= numbers.length - 1; i++){
    if(numbers[i] != numbers[i+1] && numbers[i] != numbers[i-1]){
      result = numbers[i]
    }
  }
  return result
}

/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  return numbersArray.filter(num => num % 2 == 0)
}

/* Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times. */

function repeater(string, n){
  //Your code goes here.
  let str = ''
  for (let i = 0; i <n; i++){
    str += string
  }
  return str
}


