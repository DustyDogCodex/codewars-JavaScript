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