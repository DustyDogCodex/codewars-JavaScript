/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x){
  let str_array = x.split(' ')
  
  let sum = 0
  let big_word = ''
  str_array.forEach(word => {
    let word_sum = 0
    let word_array = word.split('')
    
    word_array.forEach(letter => {
     word_sum += letter.charCodeAt(letter[0]) - 96 
    })
    
    if(word_sum > sum){
      sum = word_sum
      big_word = word
    }
  })
  return big_word
}
