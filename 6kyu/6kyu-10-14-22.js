/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

 */

function solution(str){
  const result = []
  if(str == ''){
    return []
  }
  str.length % 2 == 0 ? '' : str += '_'
  for(let i = 0; i < str.length; i += 2){
    result.push(str.slice(i,i+2))
  }
  return result
}

/* In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

    Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
    C#: MorseCode.Get(".--") (returns string)
    F#: MorseCode.get ".--" (returns string)
    Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
    Elm: MorseCodes.get : Dict String String
    Haskell: morseCodes ! ".--" (Codes are in a Map String String)
    Java: MorseCode.get(".--")
    Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
    Racket: morse-code (a hash table)
    Rust: MORSE_CODE
    Scala: morseCodes(".--")
    Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]

    C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"

    NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck! */

decodeMorse = function(morseCode){
  //your code here
  const result = []
  const morse_words = morseCode.trim().split('   ') 
  morse_words.forEach(word => {
    let decrypted_word = ''
    const char_array = word.split(' ')
    char_array.forEach(char => {
      decrypted_word += MORSE_CODE[char]
    })
    result.push(decrypted_word)
  })
  return result.join(' ')
}

/* Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

Example

is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */

function isPrime(num) {
    if(num <= 0){
      return false
    }
  //euclid's prime rule
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) return false; 
    }
    return num > 1;
}


