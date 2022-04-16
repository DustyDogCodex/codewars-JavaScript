/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
 */

function likes(names) {
  // TODO
  if(names.length == 0){
    return 'no one likes this'
  } else if (names.length == 1){
    return `${names[0]} likes this`
  } else if (names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2) */

function twoSum(numbers, target) {
  // ...
  let final_indexes = []
  numbers.forEach((number,index) => {
    for(let i = 0; i < numbers.length; i++){
      let sum = number + numbers[i]
      if(sum == target && i != index){
        final_indexes.push(index)
      }
    }
  })
  return final_indexes
}
