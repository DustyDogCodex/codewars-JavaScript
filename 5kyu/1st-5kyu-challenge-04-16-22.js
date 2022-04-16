/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  // ...
  if(arr.length == 0 || arr.every(num => num < 0)){
    return 0
  } 
  let sum = 0
  arr.forEach((num,index) => {
    let seq_sum = num
    for (let i = index + 1; i < arr.length; i++){
      seq_sum += arr[i]
      if(seq_sum > sum){
        sum = seq_sum
      }  
    }
  })
  return sum
} 

/* The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false},  */

function productFib(prod){
  // ...
  const fib_array = [1,1]
  for(let i = 2; i < 50; i++){
    fib_array.push(fib_array[i-1] + fib_array[i-2])
  }
  console.log(fib_array)
  let answer = []
  fib_array.forEach((number,index) => {
    let product = number * fib_array[index+1]
    switch(true){
      case (product == prod):
        answer.push(number)
        answer.push(fib_array[index+1])
        answer.push(true)
        break
      case (product > prod && product != prod):
        answer.push(number)
        answer.push(fib_array[index+1])
        answer.push(false)
        break
      }
  })
  let final = []
  final.push(answer[0])
  final.push(answer[1])
  final.push(answer[2])
  return final
}
