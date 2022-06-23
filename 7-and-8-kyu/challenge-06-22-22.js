/* To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers
 */

var cubeChecker = function(volume, side){
  if(side <= 0) {return false}
  return side ** 3 == volume;
};

/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27) */

function sumCubes(n){
  // ...
  let sum = 0
  for(let i = 0; i <= n; i++){
    sum += i ** 3
  }
  return sum
}

/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++ */

function generateShape(integer){
  let result = ''
  for(let i = 0; i < integer; i++){
    i < integer - 1 ? result += `${'+'.repeat(integer)}\n` : result += `${'+'.repeat(integer)}` 
  }
  return result
}



