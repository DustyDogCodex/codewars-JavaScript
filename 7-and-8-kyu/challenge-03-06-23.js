/* Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
 */

function min(arr, toReturn) {
  // TODO
  let min_value = arr[0]
  arr.forEach(num => {
    num < min_value ? min_value = num : ''
  })
  if (toReturn == 'value'){
    return min_value
  } else {
    return arr.indexOf(min_value)
  }
}

/* Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation. */

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}