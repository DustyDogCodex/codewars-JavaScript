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
