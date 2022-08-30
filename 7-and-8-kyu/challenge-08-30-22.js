/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
 */

reverse = function(array) {
  let new_array = []
  for(let i = array.length; i > 0; i--){
    new_array.push(array[i-1])
  }
  return new_array
}

/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
 */

function mango(quantity, price){
  return ((quantity - Math.floor(quantity/3)) * price)
}

