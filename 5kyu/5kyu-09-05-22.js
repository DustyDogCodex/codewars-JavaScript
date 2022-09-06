/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str){
  //Code here
  let new_words = []
  const str_array = str.split(' ')
  str_array.forEach(word => {
    let new_word = word.slice(1,word.length) + word[0] + 'ay'
    if(word.length == 1 && (word.toLowerCase().charCodeAt(0) < 97 || word.toLowerCase().charCodeAt(0) > 122)){
      new_word = word
    }
    new_words.push(new_word)
  })
  return new_words.join(' ')
}