/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
 */

function dashatize(num) {
  //get 'em
  if(isNaN(num)){
    return 'NaN'
  }
  if(num == -1){
    return '1'
  }
  const result = []
  const num_array = Math.abs(num).toString().split('');
  num_array.forEach(digit => {
    if(Number(digit) % 2 == 0){
      result.push(digit)
    } else {
      result.push("-")
      result.push(digit)
      result.push("-")
    }
  })
  if(result[0] == "-"){
    result.splice(0,1)
  }
  if(result[result.length-1] == '-'){
    result.splice(result.length-1,1)
  }
  result.forEach((piece,index) => {
    if(result[index] == "-" && result[index+1] == "-"){
      result.splice(index+1,1)
    }  
  })
  return result.join('');
}