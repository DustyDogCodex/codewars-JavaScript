/* Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]

 */

function multiples(m, n){
  // code here
  const final_array = []
  for ( let i = 1; i <= m ; i++ ){
    final_array.push(i * n)
  }
  return final_array
}

/* Definition

Jumping number is the number that All adjacent digits in it differ by 1.
Task

Given a number, Find if it is Jumping or not.
Notes

    Number passed is always Positive .

    Return the result as String .

    The difference between ‘9’ and ‘0’ is not considered as 1 .

    All single digit numbers are considered as Jumping numbers.

Input >> Output Examples

jumpingNumber(9) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"

Explanation:

    Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"

Explanation:

    Adjacent digits differ by 1
 */

function jumpingNumber(n){
  //your code here
  let str = n.toString()
  let len = str.length
  let two_digit_num = false
  const str_array = str.split('')
  
  if ( len == 1) {
    return "Jumping!!"
  } else if (len == 2) {
    
      if (Number(str_array[0]) == (Number(str_array[1]) + 1) || Number(str_array[0]) == (Number(str_array[1]) - 1)){
        two_digit_num = true
      }
      
      return two_digit_num ? "Jumping!!" : "Not!!"
    
  } else if (len >= 3) {
  
      let first_digit = false
      let last_digit = false
      let mid_digits = false
      
      if (Number(str_array[0]) == (Number(str_array[1]) + 1) || Number(str_array[0]) == (Number(str_array[1]) - 1)){
        first_digit = true
      }
      
      if (Number(str_array[len-1]) == (Number(str_array[len-2]) + 1) || Number(str_array[len-1]) == (Number(str_array[len-2]) - 1)){
        last_digit = true
      } 
      
      str_array.forEach((num,index) => {
        if (index >= 1 && index <= (len - 2)){
          if(num == (str_array[index-1] - 1) || num == (str_array[index-1] + 1) || (num == (str_array[index+1] - 1) || num == (str_array[index+1] + 1))){
            mid_digits = true
          } else {
            mid_digits = false
          }   
        }
      })
      
    return (first_digit && last_digit && mid_digits) ? "Jumping!!" : "Not!!"
    }
}

/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck! */

function solve(arr) {
  const final_array = []
  const rev_arr = arr.reverse()
  rev_arr.forEach(num => {
    if (final_array.some(el => el == num)){
      ''
    } else {
      final_array.push(num)
    }
  })
  
  return final_array;
}