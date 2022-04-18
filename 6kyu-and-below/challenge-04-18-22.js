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