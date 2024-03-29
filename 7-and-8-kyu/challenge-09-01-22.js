/* Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note

    If num is negative, ignore its sign and treat it as a positive value
    If nth is not positive, return -1
    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

Examples(num, nth --> output)

5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/

var findDigit = function(num, nth){
  const num_array = Math.abs(num).toString().split('')
  if(nth > num_array.length){
    return 0
  }
  if(nth <= 0){
    return -1
  }
  num_array.reverse()
  return Number(num_array[nth-1])
}

/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD. */

function alternateCase(s) {
  let new_str = ''
  const str_array = s.split('')
  str_array.forEach(char => {
    if(char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91){
      new_str += char.toLowerCase()
    } else if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123){
      new_str += char.toUpperCase()
    } else {
      new_str += char
    }
  })
  return new_str;
}

/* In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck! */

function fuelPrice(litres, pricePerLitre) {
  if (litres >= 10){
    return Number((litres*pricePerLitre - 0.25*litres).toFixed(2))
  } else {
    return Number((litres*pricePerLitre - (0.05*(Math.floor(litres/2)*litres ))).toFixed(2))
  }
}