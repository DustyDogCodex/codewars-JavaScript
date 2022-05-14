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

/* In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)

* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9] */

function reverseList(list) {
  return list.reverse()
}

/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

function addLength(str) {
//start-here
  const words = str.split(' ')
  const final = []
  words.forEach(word => {
    final.push(word + ' ' + word.length)
  })
  return final
}
