/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' */

function decipherThis(str) {
let secretArr = str.split(' '),
    numberToFind = /\d+/g,
    decoded = [];

function swap ([...word]) {
  let temp = word[word.length-1];
  word[word.length-1] = word[1]
  word[1] = temp

  return word.join('')
}

secretArr.forEach(word => {
  let number = word.match(numberToFind)
  let letter = String.fromCharCode(number)
  word = word.replace(number, letter)
  
  if (word.length >= 3){
    word = swap(word)
  }
  decoded.push(word)
})

return decoded.join(' ')

}; 