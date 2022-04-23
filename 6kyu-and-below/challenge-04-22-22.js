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
