/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count (string) {  
  // The function code should be here
  const str_array = string.split('')
  const result = {}
  //this if conditional ensures we operate on non-empty strings
  if (str_array.length > 0) {
    str_array.forEach(letter => {
        // COde to identify if letter already exists or to increment its value
      result[letter] ? result[letter]++ : result[letter] = 1;
    })
  } else {
    //For empty strings
    return {};
  }
  return result;
}
  
console.log(count('abba'))

/* A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)

The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0] */

function dataReverse(data) {
  // Your code here
  const len = data.length
  const joined_str = data.join('')
  //creates an array representing 8 bit data
  const data_array = []
  for (let i =0; i < joined_str.length; i+=8){
    data_array.push(joined_str.slice(i,i+8));
  }
  //creates and splits an array to get reversed data values
  const reversed_array = data_array.reverse().join('').split('')
  //converts elements from string to numbers
  const final_array = reversed_array.map(num => Number(num))
  return final_array
}

/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata. */

function reverse(str){
  //WRITE SOME MAGIC
  const str_array = str.split(' ')
  console.log(str_array)
  const reversed_words = []
  str_array.forEach((word,index) => {
    if (index % 2 == 0){
      reversed_words.push(word);
    } else {
      const reverse = word.split('').reverse().join('')
      reversed_words.push(reverse);
    }
  })
  return reversed_words.join(' ')
}

console.log(reverse("Reverse this string, please!"))

/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata. */

function reverse(str){
  //WRITE SOME MAGIC
  const str_array = str.trim().split(' ')
  
  const reversed_words = []
  str_array.forEach((word,index) => {
    //separates word by index for reversal
    if (index % 2 == 0){
      reversed_words.push(word);
    } else {
    //reverses word and pushes it into array
        const reverse = word.split('').reverse().join('')
        reversed_words.push(reverse);
    }
    });
  
  return reversed_words.join(' ')
}
