/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str){
  if(str == ''){
    return ''
  }
  const str_array = str.split('')
  const word_array = str_array.some(letter => letter == '-') ? str.split('-') : str.split('_')
  let result = ''
  word_array.forEach((word,index) => {
    if(index == 0){
      result += word
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1)
    }
  })
  return result
}