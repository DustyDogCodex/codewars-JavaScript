/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
 */


function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    function compareLengths(a,b) {
      if (a.length < b.length) {
        return -1;
      } else {
        return 1;
      }
    }
    return array.sort(compareLengths);
  };

/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s){
    const str_array = s.split('');
    const lower_array = []
    const upper_array = []
    
    str_array.map((element,index) => {
      if (index % 2 == 0) {
        element = element.toUpperCase();
        upper_array.push(element)
      } else {
        element = element.toLowerCase();
        upper_array.push(element)
      }
    })
  
    str_array.map((element,index) => {
      if (index % 2 == 0) {
        element = element.toLowerCase();
        lower_array.push(element)
      } else {
        element = element.toUpperCase();
        lower_array.push(element)
      }
    })
    
    let upper_str = upper_array.join('')
    let lower_str = lower_array.join('')
    return [upper_str,lower_str];
};