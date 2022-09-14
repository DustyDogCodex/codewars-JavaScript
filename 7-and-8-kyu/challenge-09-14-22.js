/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

function cubeOdd(arr) {

// insert code here >.<
  let sum = 0
  for( let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      sum = undefined
      return sum
    }
  }
  arr.map(num => {
    if(num % 2 != 0) {
      sum += num ** 3
    }
  })
  return sum;
}

/* In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.

More examples in the test cases. */ 

function pairs(ar){
   let count = 0;
   for (let i=0; i<ar.length; i+=2){
      if(ar[i] - 1 === ar[i+1] || ar[i] + 1 === ar[i + 1]){
         count++;
      };
   };
   return count;
}