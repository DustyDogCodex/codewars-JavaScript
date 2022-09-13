/* Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

const orderedCount = function (text) {
  // Implement me!
  if (text == []){
    return []
  }
  const str_array = text.split('')
  const final_array = []
  const repeating_letters = []
  str_array.forEach(letter => {
    let letter_count = 0
    if (!repeating_letters.includes(letter)){
      repeating_letters.push(letter)
      for(let i = 0; i < str_array.length; i++){
        str_array[i] == letter ? letter_count++ : ''  
      }
      final_array.push([letter, letter_count])
    }
  })
  return final_array
}

/* Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0 */

function Hero (name) {
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}

/* Task

Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

If you forgot how to push an element to array, please refer to lesson 4. */

function grabDoll(dolls){
  var bag=[];
  //coding here
  for(let i = 0; i < dolls.length; i++){
    if(bag.length == 3){
      break  
    } else if(dolls[i] == "Barbie doll" || dolls[i] == 'Hello Kitty'){
      bag.push(dolls[i])
    } else {
      continue
    }
  }
  return bag;
}