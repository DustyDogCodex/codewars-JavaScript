/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
 */

function dutyFree(normPrice, discount, hol){
  let saving = normPrice * discount/100
  return Math.floor(hol/saving)
}

/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
 */

function sumDigits(number) {
  const digits = number.toString().split('')
  let sum = 0
  digits.forEach(num => {
    if(!isNaN(num)){
      sum += Number(num)
    }
  })
  return sum
}