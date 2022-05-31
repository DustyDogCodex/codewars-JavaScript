/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

function solution(str){
  const str_array = str.split('')
  return str_array.reverse().join('')
}

/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK" */

var isAnagram = function(test, original) {
 return (test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''));
};

