/* Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN. */

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return (n || m) == 0 ? NaN : Math.max(n,m) % Math.min(n,m) 
}