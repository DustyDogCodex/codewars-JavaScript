/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" */

function spinWords(string){
  //TODO Have fun :)
  const word_array = string.split(' ')
  const reversed_array = []
  word_array.forEach(word => {
    word.length >= 5 ? reversed_array.push(word.split('').reverse().join('')) : reversed_array.push(word)  
  })
  return reversed_array.join(' ')
}

/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var countBits = function(n) {
  const binary_array = n.toString(2).split('')
  let count = 0
  binary_array.forEach(num => {
    +num == 1 ? count++ : ''  
  })  
  return count
};

/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

function findOutlier(integers){
  //your code here
  let even_count = 0
  let odd_count = 0
  for (let i = 0; i <= 2; i++){
    integers[i] % 2 == 0 ? even_count++ : odd_count++
  }
  if (even_count > odd_count){
    const result = integers.filter(num => num % 2 != 0)
    return +result[0]
  } else {
    const result = integers.filter(num => num % 2 == 0)
    return +result[0]
  }
}


