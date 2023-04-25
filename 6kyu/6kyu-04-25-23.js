/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Don't forget to rate this kata! Thanks :)
 */

String.prototype.camelCase=function(){
  //your code here
  const word_array = this.split(' ')
  const final_array = []
  word_array.forEach(word => {
    final_array.push(word.slice(0,1).toUpperCase() + word.slice(1))
  })
  return final_array.join('')
}