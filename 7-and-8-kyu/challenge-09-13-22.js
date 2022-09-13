/* Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

const orderedCount = function (text) {
  // Implement me!
  if (text == []){
    return []
  }
  const str_array = text.split('')
  const final_array = []
  const repeating_letters = []
  str_array.forEach(letter => {
    let letter_count = 0
    if (!repeating_letters.includes(letter)){
      repeating_letters.push(letter)
      for(let i = 0; i < str_array.length; i++){
        str_array[i] == letter ? letter_count++ : ''  
      }
      final_array.push([letter, letter_count])
    }
  })
  return final_array
}