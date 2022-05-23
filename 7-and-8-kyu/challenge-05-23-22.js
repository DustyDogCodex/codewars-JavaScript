/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

/* Now you have to write a function that takes an argument and returns the square of it. */

const square = n => n * n

/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0) */

/* Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10 */


function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }

/* Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */

const twoDecimalPlaces = n =>  Number(n.toFixed(2))

/* Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

function getSize(width, height, depth){
  let area = 2 * (width*height + height*depth + depth*width)
  let volume = width * height * depth
  return [area,volume]
}

/* Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer. */

function isSortedAndHow(arr) {
  let answer = ''
  if(arr.every((x,i)=>i==0||arr[i]>=arr[i-1])){           //check to see if every index has the same number. This confirms the order of arrangement of this array
    answer = 'yes, ascending'
  } else if (arr.every((x,i)=>i==0||arr[i]<=arr[i-1])){
    answer = 'yes, descending'
  } else {
    answer = 'no'
  }
  return answer
}