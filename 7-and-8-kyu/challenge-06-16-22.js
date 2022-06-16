/* Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

 */

function sayHello( name, city, state ) {
  let name_str = ''
  for(let i = 0; i < name.length; i++){
    i == 0 ? name_str += name[i] : name_str += ' ' + name[i]
  }
  return `Hello, ${name_str}! Welcome to ${city}, ${state}!`
}

/* Complete the function which converts hex number (given as a string) to a decimal number. */

function hexToDec(hexString){
  return parseInt(hexString,16)
}

/* *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case. */

function check(a,x){
  return a.some(num => num == x)
}