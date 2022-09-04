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