/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
  // Return a sorted array.
  const odd_array = []
  const final_array = []
  if(array.length == 0){
    return []
  }
  array.forEach(num => {
    if(num % 2 != 0){
      odd_array.push(num)
    }
  })
  odd_array.sort((a,b) => a - b)
  let i = 0
  array.forEach(num => {
    if(num % 2 == 0){
      final_array.push(num)
    } else {
      final_array.push(odd_array[i])
      i++
    }
  })
  return final_array
}