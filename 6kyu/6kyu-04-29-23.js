/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
 */

// Return the output array, and ignore all non-op characters

function parse( data )
{
  let count = 0
  const str_array = data.split('')
  const final_array = []
  str_array.forEach(letter => {
    if(letter == 'i'){
      count++
    } else if (letter == 'd'){
      count--
    } else if (letter == 's'){
      count *= count
    } else if (letter == 'o'){
      final_array.push(count)
    }
  })
  return final_array 
}
