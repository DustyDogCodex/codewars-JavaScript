/* Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
 */

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
  // Your code here
  const num_array = num.toString().split('')
  let str = ''
  num_array.forEach((num,index) => {
    if(index == 0){
      str += Number(num) * (10**(num_array.length - index - 1))
    } else if(num == 0){
      str = str
    } else {
      str += " + " + (Number(num) * (10**(num_array.length - index - 1)))
    }
  })
  return str
}

/* Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text){
  //...
  let letter_array = text.toLowerCase().split('')
  let checked_letters = []
  let count = 0
  letter_array.forEach((letter,index) => {
    let duplicate = false
    if(!checked_letters.includes(letter)){
      for(let i = index+1; i < letter_array.length; i++){
        if (letter_array[i] == letter){
          duplicate = true
          checked_letters.push(letter)
        }
      }
    }
    if (duplicate == true){
      count++
    }
  })
  return count
}
