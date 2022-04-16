/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */

function fakeBin(x){
  let num_array = x.split('')
  let final_array = []
  num_array.forEach(num => {
    if(Number(num) >= 5){
      final_array.push(1)
    } else {
      final_array.push(0)
    }
  })
  return final_array.join('')
}