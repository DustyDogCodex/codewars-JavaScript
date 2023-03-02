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

