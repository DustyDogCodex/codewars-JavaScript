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
