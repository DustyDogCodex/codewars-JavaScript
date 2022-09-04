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
