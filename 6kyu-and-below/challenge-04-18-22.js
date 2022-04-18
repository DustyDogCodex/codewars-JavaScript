/* Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
 */

function opposite(number) {
  //your code here
  return -number
}

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
  //your code here
  let final_array = []
  arr.forEach((word,index) => {
    if(index % 2 == 0){
      final_array.push(word)
    }
  })
  return final_array
}

/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake. */

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

/* Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
  const regex = /[A-Z]/g
  const cap_letters = string.match(regex)
  const letter_array = string.split('')
  const final_array = []
  if (cap_letters == null){
     return string 
  }
  letter_array.forEach((word,index) => {
    if(cap_letters.includes(word)){
      final_array.push(' ')
      final_array.push(word)
    } else {
      final_array.push(word)
    }
  })
  return final_array.join('')
}

/* You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

function twoSort(s) {
  const sorted_array = s.sort()
  const str = sorted_array[0].split('')
  let final_str = ''
  str.forEach((letter,index) => {
    if(index == 0){
      final_str += letter
    } else {
      final_str += '***' + letter
    }
  })
  return final_str
}

/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

function howMuchILoveYou(nbPetals) {
    // your code
  let rem = nbPetals % 6
  switch(rem){
    case 1:
      return "I love you"
      break
    case 2:
      return "a little"
      break
    case 3:
      return "a lot"
      break
    case 4:
      return "passionately"
      break
    case 5:
      return "madly"
      break
    case 0:
      return "not at all"
      break
  }
}

/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same. */

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const regex = /(:|;)+(~|-)+(D|\))/g 
  const regex2 = /(:|;)+(D|\))/g
  let count = 0
  arr.forEach(smiley => {
    if(smiley.length<=3){
      if(smiley.match(regex) || smiley.match(regex2)){
        count++
      }
    }
  })
  return count
}

