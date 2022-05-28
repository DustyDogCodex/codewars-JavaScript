/* Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples
 */

function sumMul(n,m){
  if(m <= 0) {return "INVALID"}
  
  let sum = 0
  for(let i = 1; n*i < m; i++){
    sum += n * i
  }
  return sum
}