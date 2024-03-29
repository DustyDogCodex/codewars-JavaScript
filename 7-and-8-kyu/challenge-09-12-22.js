/* Complete the function which converts a binary number (given as a string) to a decimal number. */

function binToDec(bin){
  return parseInt(bin,2)
}

/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
 */

function remove (string) {
  return string[string.length -1] == '!' ? string.slice(0,string.length-1) : string;
}

/* Return the type of the sum of the two arguments. */

function typeOfSum(a, b) {
  return typeof (a+b)
}