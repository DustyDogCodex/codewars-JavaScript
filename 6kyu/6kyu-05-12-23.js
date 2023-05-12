/* Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
 */

function pyramid(n) {
  // your code here
  const result = []
  for(let i = 0; i <= n; i++){
    const ones_array = []
    for(let j = 1; j <= i; j++){
      ones_array.push(1)
    }
    result.push(ones_array)
  }
  result.splice(0,1)
  return result
}

/* In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

    Double every other digit, scanning from right to left, starting from the second digit (from the right).

    Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:

    1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

    12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

    891 ==> [8, 9*, 1] ==> [8, 18, 1]

    If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

    Sum all of the final digits:

    [8, 9, 1] ==> 8 + 9 + 1 = 18

    Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

    18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

 */

function validate(n){
  const str_array = n.toString().split('').reverse()
  const doubled_array = []
  str_array.forEach((num,index) => {
    if(index % 2 != 0){
      doubled_array.push((Number(num) * 2).toString())
    } else {
      doubled_array.push(num)
    }
  })
  const single_digits_array = doubled_array.map(num => {
    if(num.length > 1){
      const num_array = num.split('')
      return Number(num_array[0]) + Number(num_array[1])
    } else {
      return num
    }
  })
  const sum = single_digits_array.reduce((prev,curr) => Number(prev) + Number(curr))
  return sum % 10 == 0
}