/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str){
  if(str == ''){
    return ''
  }
  const str_array = str.split('')
  const word_array = str_array.some(letter => letter == '-') ? str.split('-') : str.split('_')
  let result = ''
  word_array.forEach((word,index) => {
    if(index == 0){
      result += word
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1)
    }
  })
  return result
}

/* A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. */

function narcissistic(value) {
  // Code me to return true or false
  const len = value.toString().length
  const digit_array = value.toString().split('')
  let sum = 0
  digit_array.forEach(digit => {
    sum += digit ** len
  })
  return value == sum
}