/* You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#). */

function portion(a, i, n) {

  let l = a.length
  ,   x = i < 0 ? l + i - n: i;
  
  if (x < 0 | x + n > l)
    return -1;
    
  return a.slice(x, x + n);
  
}