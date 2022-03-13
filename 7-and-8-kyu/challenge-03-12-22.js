/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++){
    z.push(x*i)
  }
  return z;
}

/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
  
  while(n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

/* Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
  let reversed_string = x.toLowerCase().split('').reverse().join('')
  return x.toLowerCase() == reversed_string
}
