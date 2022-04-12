/* Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57. */

function solve(s) {
  let vowels = ['a','e','i','o','u']
  let str_array = s.toLowerCase().split('')
  let consonant_array = []
  str_array.forEach(letter => {
    if(vowels.includes(letter)){
      consonant_array.push("_")
    } else {
      consonant_array.push(letter)
    }
  })
  
  let substrings_array = consonant_array.join('').split('_')
  
  let sum = 0
  substrings_array.forEach(str => {
    let val = str.split('')
    
    let sum1 = 0
    val.forEach(alphabet => {
      sum1 += alphabet.charCodeAt(0) - 96
      
      if (sum1 > sum){
        (sum = sum1)
      }
    })
    
  })
  return sum;
}
