/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
 */

function solution(nums){
  if(nums == null || nums.length < 1){
    return []
  } else {
    return nums.sort((a,b) => { return a - b})
  }
}

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2){
  // moment of truth
  return (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0)
}

/* Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */

function problem(x){
  //your code here
  if(typeof x == 'number'){
    return x * 50 + 6
  } else {
    return 'Error'
  }
}

/* Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) */

function findSum(n) {
  let sum = 0
  for (let i = 0; i <= n; i++){
    if(i % 3 == 0 || i % 5 ==0){
      sum += i
    }
  }
  return sum;
}

/* Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :) */

function unusualFive() {
  return 'Varun'.length
}

/* Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)

should return:

'A' */

function getChar(c){
  // ...
  return String.fromCharCode(c)
}

/* The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

function checkExam(array1, array2) {
 // good luck
  let result = 0
  array2.forEach((num,index) => {
    if(num == array1[index]){
      result += 4
    } else if (num == ''){
      result += 0
    } else {
      result -= 1
    }
  })
  return result < 0 ? 0 : result
}



