/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let str_array
  let no_chars = []
  let final_array = []
  
  if(typeof iterable == 'string'){
    str_array = iterable.split('')
    str_array.forEach(char => {
      if(char != ','){
        no_chars.push(char)
      }})
    no_chars.forEach((letter,index) => {
    if(no_chars[index] != no_chars[index+1]){
        final_array.push(letter)
      } 
    })
  } else if (typeof iterable == 'object'){
    iterable.forEach((char1,index) => {
      if(iterable[index] != iterable[index+1]){
        final_array.push(char1)
      } 
    })
  }
  return final_array
}