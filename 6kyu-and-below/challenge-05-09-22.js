/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
 */

function gimme (triplet) {
  let middle
  const temp_array = []
  triplet.forEach(num => {
    temp_array.push(num)
  })
  temp_array.sort((a,b) => a - b)
  middle = temp_array[1]
  return triplet.indexOf(middle)
}

/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string */

var number=function(array){
  //your awesome code here
  if(array.length == 0){
    return []
  }
  const final_array = []
  array.forEach((str,index) => {
    let output = `${index+1}: ${str}`
    final_array.push(output)
  })
  return final_array
}