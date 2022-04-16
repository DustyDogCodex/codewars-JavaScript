/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

var number = function(busStops){
    // Good Luck!
    let people_in_bus = 0;
    busStops.forEach(stop => {
      people_in_bus += stop[0] - stop[1]
    })
    return people_in_bus
}

/* We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:

Input:

> 6

Output:

    0+1+2+3+4+5+6 = 21

Input:

> -15

Output:

    -15<0

Input:

> 0

Output:

    0=0 */

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0;
    let sequence = '0'
    if (count > 0) {
      for(let i = 1; i <= count; i++) {
          sum += i
          sequence += `+${i}`
      }
      return `${sequence} = ${sum}`
    } else if (count < 0) {
        return `${count}<0`
    } else if ( count == 0) {
        return "0=0";
    } 
  };

  return SequenceSum;

})();

/* Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    let final_array = []
    array.forEach (element => {
        element.forEach(num => {
          if (Number.isInteger(num)) {
            final_array.push(num);
          }
        })
    })
    function sortNumbers(a,b) {
      return a > b ? 1 : -1
    }
    return final_array.sort(sortNumbers);
}

/* Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
 */

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let sum = 0;
  for (let i = begin; i <=end; i+= step){
    sum += i;
  }
  return sum
};

/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

function isTriangle(a,b,c){
  if ((a+b>c) && (b+c>a) && (a+c>b)) {
    return true;
  }
  return false;
}
