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

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */

function printerError(s) {
  const invalidCharacters = [...s]
        .map(s => s.charCodeAt(0))
        .filter(
            charCode => charCode < 97 || charCode > 109
         );
  return `${invalidCharacters.length}/${s.length}`;
}

