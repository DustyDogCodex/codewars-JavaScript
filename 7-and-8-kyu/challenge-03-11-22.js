/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

Waiting for translations and Feedback! Thanks!
 */

function paperwork(n, m) {
  return (n>0 && m > 0) ? n*m : 0
}

/* We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4] */

function arr(n){
  const result = [];
  for(let i = 0; i < n; i++){
    result.push(i);
  }
  return result;
}
