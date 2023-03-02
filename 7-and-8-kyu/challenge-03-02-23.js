/* Definition

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Task

Given a number determine if it Automorphic or not . */

function automorphic(n){
  //your code here
  let length = n.toString().length
  
  let square = n * n
  
  let digits = square.toString().slice(-length)
  
  return n == digits ? 'Automorphic' : 'Not!!'
}