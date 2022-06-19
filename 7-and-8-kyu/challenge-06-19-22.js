/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
 */

function defineSuit(card) {
  // good luck
  const cards_array = card.split('')
  let i = cards_array.length - 1
  switch(cards_array[i]){
      case '♣':
        return 'clubs'
      case '♦':
        return 'diamonds'
      case '♥':
        return 'hearts'
      case '♠':
        return 'spades'
  }
}

/* This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)

In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8 */

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${Math.abs(exponent-1)}`
}

/* Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  [] */

function odds(values){
  // arrow it
  return values.filter(num => num % 2 != 0 );
}


