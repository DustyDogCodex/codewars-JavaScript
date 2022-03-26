/* You have to extract a portion of the file name as follows:

    Assume it will start with date represented as long number
    Followed by an underscore
    You'll have then a filename with an extension
    it will always have an extra extension at the end

Inputs:

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2

Outputs

FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar

Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789 */

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      const file_array = dirtyFileName.split('_');
      const temp_array = []
      file_array.forEach((word,index) => {
        if (index < file_array.length - 1){
          temp_array.push(word)
        } else if (index == file_array.length - 1){
          const ext_array = word.split('.')
          console.log(ext_array)
          ext_array.pop()
          ext_array.forEach(word => {
            temp_array.push(word)
          })
          //ext_array
        }
      })
      temp_array.shift()
      let ext = temp_array.pop()
      console.log()
      console.log(ext)
      return temp_array.join('_') + "." + ext
    
    }
}

/* Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string. */


function binaryToString(binary) {
  const bit_array = []
  const char_array = []
  //slice all 8-bit strings into an array 
  for(let i = 0; i < binary.length; i+=8){
      bit_array.push(binary.slice(i,i+8))
  }
  //convert every bit into its ASCII character and push it into char_array
  bit_array.forEach(bit => {
    char_array.push(String.fromCharCode(parseInt(bit,2)))
  })
  //join characters together to return final array
  return char_array.join('') 
}

console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'))