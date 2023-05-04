/* An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
Example

findMissing([1, 3, 5, 9, 11]) == 7

PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
 */

var findMissing = function (list) {  
  let result 
  const diff1 = list[1] - list[0]
  const diff2 = list[list.length-1] - list[list.length-2]
  
  if(diff1 == diff2){
    for(let i = 0; i < list.length - 1; i++){
      if(list[i] + diff1 != list[i+1]){
        result = list[i] + diff1
      }
    }
    return result
  }   
  
  let diff1_count = 0
  let diff2_count = 0
  
  while(diff1_count <= 3 || diff2_count <= 3){
    for(let i = 0; i < list.length - 1; i++){
      let difference = list[i+1] - list[i]
      if(difference === diff1){
        diff1_count++
      } else if (difference === diff2){
        diff2_count++
      }
    }
  }
  
  let progression = diff1_count > diff2_count ? diff1 : diff2
  for(let i = 0; i < list.length - 1; i++){
    if(list[i] + progression != list[i+1]){
      result = list[i] + progression
    }
  }
  return result
}