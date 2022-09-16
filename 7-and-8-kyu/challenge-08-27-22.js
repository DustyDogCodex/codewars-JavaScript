/* You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
 */

function billboard(name, price = 30){
  let total = 0
  name.split('').forEach(el => {
    total += price
  })
  return total
} 

/* Definition

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task

Given a number, Find if it is Disarium or not . */ 

function disariumNumber(n){
  //your code here
  const digits_array = n.toString().split('')
  let sum = 0
  digits_array.forEach((digit, index) => {
    sum += digit ** (index + 1)  
  })
  return sum == n ? "Disarium !!" : "Not !!"
}