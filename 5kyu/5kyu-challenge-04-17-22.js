/* Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString (string) {
  // return incrementedString
  let str_array = string.split('') 
  
  let final_array = []
  let num_str = []
  let final_str = 0
  str_array.forEach(letter => {
    if(isNaN(+letter)){
      final_array.push(letter)
    } else {
      num_str.push(letter.toString())
    }
  })
  
  if(string.length == 0){
    return '1'
  } 
  
  if(num_str[0] == 0) {
    if (num_str[num_str.length-1] == '9'){
      num_str[num_str.length-1] = 0
      num_str[num_str.length-2] = Number(num_str[num_str.length-2]) + 1
    } else {
      num_str[num_str.length-1] = Number(num_str[num_str.length-1]) + 1
    }
  } else {
    final_str = Number(num_str.join('')) + 1
  }

  if (num_str.length == 0){
    num_str.push(1)
  }
  
  if (num_str[num_str.length-2] == '10'){
    num_str[num_str.length-2] = 0
    num_str[num_str.length-3] = Number(num_str[num_str.length-3]) + 1
  } 
  
  if (num_str[num_str.length-3] == '10'){
    num_str[num_str.length-3] = 0
    num_str[num_str.length-4] = Number(num_str[num_str.length-3]) + 1
  }

  if(final_str == 0) {
    return final_array.join('') + num_str.join('')
  } else {
    return final_array.join('') + final_str
  }
}

console.log(incrementString("foobar99"))