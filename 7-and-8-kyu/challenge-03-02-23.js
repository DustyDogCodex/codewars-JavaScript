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

/* Task

Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
Notes

    Return an array/list where Even numbers come first then odds

    Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

    Array/list size is at least 4 .

    Array/list numbers could be a mixture of positives , negatives .

    Have no fear , It is guaranteed that no Zeroes will exists . !alt

    Repetition of numbers in the array/list could occur , So (duplications are not included when separating). */

function menFromBoys(arr){
  //your code here
  const men = []
  const boys = []
  arr.forEach(element => {
    element % 2 == 0 ? men.push(element) : boys.push(element)
  })
  men.sort((a,b) => a - b)
  boys.sort((a,b) => b - a)
  return men.concat(boys)
}

/* A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples

 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28] */

function sumOfN(n) {
  let sum = 0
  let result = []
  if (n > 0) {
    for(let i = 0; i < n+1; i++){
      sum += i
      result.push(sum)
    }
  } else {
    for(let i = 0; i < Math.abs(n)+1; i++){
      sum += i
      result.push(sum == 0 ? 0 : -sum)
    }
  }
  return result
};
