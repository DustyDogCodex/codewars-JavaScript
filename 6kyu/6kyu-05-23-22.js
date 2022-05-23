/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */



function isValidWalk(walk) {
    let north_south = 0     //for movement north or South. 
    let east_west = 0       //for movement east or west. 
    if(walk.length == 10){
      for (let i of walk) { 
        if (i == 'n') north_south += 1; //Movement in either direction negates movement in the opposite direction
        if (i == 's') north_south -= 1; 
        if (i == 'e') east_west += 1;   //Same reason as above
        if (i == 'w') east_west -= 1; 
      } 
    } else {
      return false
    }
    return north_south == 0 && east_west == 0; 
  }

/* Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n" */

function diamond(n){
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  const repeat = ch => n => ch.repeat(n)
  const space = repeat(' ')
  const asterix = repeat('*')

  let diamond_row = ''
  for (let row = 1; row <= n; row++) {
    const spaces = Math.abs(n - ((2*row) - 1))
    const stars = n - spaces
    diamond_row += `${space(spaces / 2)}${asterix(stars)}\n`
  }

  return diamond_row
}

