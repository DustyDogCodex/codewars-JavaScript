/* Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

 */

function multipleOfIndex(array) {
  let new_array = []
  array.forEach((num,index) => {
    if(num % index == 0){
      new_array.push(num)
    }
  })
  return new_array
}

/* A Tidy number is a number whose digits are in non-decreasing order.
Task

Given a number, Find if it is Tidy or not . */

function tidyNumber(n){
  let arr = [...n.toString()].map(Number);
  return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]);
}
