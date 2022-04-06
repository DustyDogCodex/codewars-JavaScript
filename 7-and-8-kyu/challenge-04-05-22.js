/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
  // Go for it
  const result = []
  const words_array = str.split(' ')
  words_array.forEach(word => {
    let reversed_word = word.split('').reverse().join('')
    result.push(reversed_word)
  })
  return result.join(" ")
}