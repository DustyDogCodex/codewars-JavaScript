/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
 */

var min = function(list){
    list.sort((a,b) => { return a - b})
    return list[0];
}

var max = function(list){
    list.sort((a,b) => {return b - a})
    return list[0];
}

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  const letter_array = str.split('')
  const vowels = ['a','e','i','o','u']
  letter_array.forEach(letter => {
    if(vowels.includes(letter)){
      vowelsCount++
    }  
  })
  
  return vowelsCount;
}

/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
 */

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor((s*1000*100)/3600)
}

/* Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

 */

function findEvenIndex(arr)
{
  let ind = -1
  arr.forEach((num,index) => {
    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < index; i++){
      sum1 += arr[i]
    }
    for(let z = index+1; z < arr.length; z++){
      sum2 += arr[z]
    }
    if(sum1 == sum2){
      ind = index  
    }
  })
  return ind
}