/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

function toWeirdCase(str){
  //TODO
  const str_array = str.split(' ')
  const final_array = []
  str_array.forEach((word,index) => {
    
    if (word.length == 1){
      final_array.push(word.toUpperCase())
    } else {
      const word_array = word.split('')
      const weird_word = []
    
      word_array.forEach((letter,index) => {
        if (index % 2 == 0){
          weird_word.push(letter.toUpperCase())
        } else {
          weird_word.push(letter.toLowerCase())
        }
      }) 
      
      final_array.push(weird_word.join(''))
      
    }
  })
    
  return final_array.join(' ')
  
}