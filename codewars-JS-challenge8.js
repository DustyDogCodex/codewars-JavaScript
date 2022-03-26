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