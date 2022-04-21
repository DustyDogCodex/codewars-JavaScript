/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

 */

function domainName(url){
  //your code here
  let regex = /(.\/\/)|(\.)/g
  let new_str = url.replace(regex, '_')
  const word_array = new_str.split('_')
  const invalid_words = ['www','http','https']
  for(let i = 0; i <= word_array.length; i++){
    if(!invalid_words.includes(word_array[i])){
      return word_array[i]
    }
  }
}