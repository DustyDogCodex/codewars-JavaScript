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

