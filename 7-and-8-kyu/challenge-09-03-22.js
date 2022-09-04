/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x){
  const str_num = []
  const reg_num = []
  x.forEach(num => {
    typeof num == 'number' ? reg_num.push(num) : str_num.push(num) 
  })
  return reg_num.reduce((a,b) => a + b, 0) - str_num.reduce((a,b) => +a + +b, 0)
}

/* This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. */

function distanceBetweenPoints(a, b) {
  // your code here
  return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2)
}

/* Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.
*/

function foldTo(distance) {
  return distance < 0 ? null : Math.ceil(Math.log2(distance/0.0001))
}
