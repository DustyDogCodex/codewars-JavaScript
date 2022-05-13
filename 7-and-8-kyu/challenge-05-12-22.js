/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
 */

function smallEnough(a, limit){
  return a.every(num => num <= limit)
}

/* Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. */

function firstNonConsecutive (arr) {
  let result = null
  arr.forEach((num,index) => {
    if(index > 0 && num != arr[index-1] + 1){
      result = num
    }
  })
  return result
}