/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  //happy coding!
  let num_object = {}
  A.forEach(num => {
    num_object[num] ? num_object[num]++ : num_object[num] = 1
  })
  
  let freq = Object.values(num_object)
  let keys = Object.keys(num_object)
  
  let key_index = ''
  freq.forEach((num,index) => {
    if(num % 2 != 0){
      key_index = index
    }
  })
  
  return Number(keys[key_index]);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))