/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

function cubeOdd(arr) {

// insert code here >.<
  let sum = 0
  for( let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      sum = undefined
      return sum
    }
  }
  arr.map(num => {
    if(num % 2 != 0) {
      sum += num ** 3
    }
  })
  return sum;
}