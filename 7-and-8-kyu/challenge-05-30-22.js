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

/* Variable assignment

Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
 */

var a = "dev"
var b = "Lab"

var name = a + b

/* Description:

Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
 */

const remove = function(str, n) {
  let i = 0;
  const res = str.replace(/!/g, match => i++ < n ? '' : match);
  return res;
}


