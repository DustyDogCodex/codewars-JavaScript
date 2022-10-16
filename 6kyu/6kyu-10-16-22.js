/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: In some languages r must be without duplicates.

 */

function inArray(array1,array2){
  //...
  const result = []
  array1.forEach(str => {
    let count = 0
    for(let i = 0; i < array2.length; i++){
      array2[i].includes(str) ? count++ : ''
    }
    count >= 1 ? result.push(str) : ''
  })
  return result.sort()
}

/* Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False */

function validBraces(braces){
  //TODO
  while(braces.indexOf('()') != -1 || braces.indexOf('[]') != -1 || braces.indexOf('{}') != -1){
    braces = braces.replace('()', "").replace('[]', '').replace('{}', '')
  }
  return braces.length == 0
}

