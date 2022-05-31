/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

function solution(str){
  const str_array = str.split('')
  return str_array.reverse().join('')
}