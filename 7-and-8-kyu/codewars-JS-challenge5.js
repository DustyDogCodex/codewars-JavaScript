/* A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed. */

function titleCase(title, minorWords) {
    if(title.length === 0) return title;
    var words = title.toLowerCase().split(" ");
    var minorWordsArray = minorWords?minorWords.toLowerCase().split(" "):[];
    return words.map(function(word,index){
      if(minorWordsArray.indexOf(word) !== -1 && index!=0){
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */


function arrayDiff(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
}

/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

function encode(string) {
  const str_array = string.split('');
  console.log(str_array)
  const result = []
  str_array.forEach(letter => {
    switch(letter) {
      case 'a':
        result.push(1);
        break
      case 'e':
        result.push(2);
        break
      case 'i':
        result.push(3);
        break
      case 'o':
        result.push(4);
        break
      case 'u':
        result.push(5);
        break
      default:
        result.push(letter)
        break
  }});
  return result.join('')
}

function decode(string) {
  const str_array = string.split('');
  const result = []
  str_array.map(letter => {
    switch(letter){
      case '1':
        result.push('a');
        break
      case '2':
        result.push('e');
        break
      case '3':
        result.push('i');
        break
      case '4':
        result.push('o');
        break
      case '5':
        result.push('u');
        break
      default:
        result.push(letter)
        break
  }});
  return result.join('')
  return
}

console.log(encode('hello')) //'h2ll4';
console.log(decode('h2ll4')) //'hello'
