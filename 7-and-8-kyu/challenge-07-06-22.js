/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  let new_str = ''
  let str_array = x.split('')
  str_array.forEach(val => {
    if ( val == 'a'){
      new_str += 'b' 
    } else if (val == 'b'){
      new_str += 'a'
    } else {
      new_str += val
    }
  })
  return new_str
}