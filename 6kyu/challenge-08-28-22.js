/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr){
 
  let result = 0;
  let y = 0;
  
  
  for (i = 0; i < arr.length; i++) {
    let x = 0;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) x += 1;
    }
    if (x > y) {
      y = x;
      result = arr[i];
    }
  }
  return result;
}