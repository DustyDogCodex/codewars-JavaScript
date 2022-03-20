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