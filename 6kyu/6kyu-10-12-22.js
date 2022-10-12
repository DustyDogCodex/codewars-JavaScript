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
