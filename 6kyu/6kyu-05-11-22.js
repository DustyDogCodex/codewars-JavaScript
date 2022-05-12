/* Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.
 */

var encryptThis = function(text) {
  // Implement me! :)
  const word_array = text.split(' ')
  const encrypted_array = []
  word_array.forEach(word => {
    let str = ''
    if(word.length < 2){
      str += word.charCodeAt(0)
    } else if(word.length == 2){
      str += word.charCodeAt(0)
      str += word[1]
    } else { 
      str += word.charCodeAt(0)
      str += word[word.length-1]
      str += word.slice(2,word.length-1)
      str += word[1]
    }
    encrypted_array.push(str)
  })
  return encrypted_array.join(' ')
}