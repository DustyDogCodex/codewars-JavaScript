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

/* If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence */

function Xbonacci(arr, n){
  const result = arr.slice(0, n)
  const length = arr.length
  while (result.length < n) {
    result.push(result.slice(-length).reduce((a, b) => a + b))
  }
  return result
}    