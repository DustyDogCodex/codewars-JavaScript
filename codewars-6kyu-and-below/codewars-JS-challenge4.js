/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
	// split given string into letters
  let str_array = s.split('');
  
  let letter_array = [];
  //for each letter creates a string that is that letter repeated index+1 times
  //first letter of each string is uppercase
 str_array.forEach((letter,index) => {
      let str = '';
      for(let i = 0; i < (index + 1); i++){
        if(i < 1){
          str += letter.toUpperCase();
        } else {
          str += letter.toLowerCase();
        }
      }
      //push to letter_array 
      letter_array.push(str);
  });
  //joins letter array to get the wanted sequence of letters
  return letter_array.join('-');
}

/* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements! */

function arithmetic(a, b, operator){
    //switch conditional can take care of all of this
    switch (operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
}

/*If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty. */

function wordsToMarks(string){

    let sum = 0;
    for(let i = 0; i < string.length; i++){
      //give letters numerical value by subtracting 96 from their ASCII value
      //this way a = 1, b = 2 etc
      let num_value = string.charCodeAt(i) - 96;
      sum += num_value;
    }
    return sum;
}

/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

function openOrSenior(data){
    const final_array = [];
    data.forEach(player => {
      //players have to be 55 or older and have a handicap above 7 to be a senior
      if ((player[0] >= 55) && (player[1] > 7)){
        final_array.push("Senior");
      } else {
        final_array.push("Open");
      }
    })
    return final_array;
}

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    const split_array = s.split(' ');
    split_array.sort((function (a, b) {
      if (a.length > b.length) {
        return 1;
      } else if (a.length < b.length) {
        return -1;
      } else {
        return 0;
      }
    }));
    return split_array[0].length;
}

/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){
    // TODO: complete
    const url_array = url.split('#');
    return url_array[0];
}

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){
    //...
    const split_num = n.toString().split('');
    //sort the numbers by descending order
    split_num.sort((a, b) => {
    if (Number(a) > Number(b)) {
      return -1;
    }
    if (Number(a) < Number(b)) {
      return 1;
    }
    return 0;
  });
  
    const new_num = split_num.join('');
    return Number(new_num);
}

/* A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
  if (Number.isInteger(n ** (1/2))) {
    return true;
  }
  return false;
}

/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

function friend(friends){
  //your code here
  const real_friends = [];
  friends.forEach( friend => {
    if (friend.length === 4) {
      real_friends.push(friend);
    }
  })
  return real_friends;
}

/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) */

function getDivisorsCnt(n){

  const divisors_array = [];
  for (let i = 0; i <= n; i++)
    if (n%i == 0){
      divisors_array.push(i);
    }
  return divisors_array.length;
}

/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer. */

function largestPairSum (numbers) {
  //TODO: Write your Code here
  // sort array in descending order and then summing the first 2 elements
  numbers.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  return numbers[0] + numbers[1];
}