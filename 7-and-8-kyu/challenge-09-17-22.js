/* Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
 */

var Ghost = function() {
  let colors = ['white','yellow','purple','red']
  this.color = colors[Math.floor(Math.random() * 4)]
};

/* Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
 */

function slope(points)
{
  return points[2] - points[0] == 0 ? 'undefined' : ((points[3] - points[1])/(points[2] - points[0])).toString()
}

/* Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */

function getGrade (s1, s2, s3) {
  var score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
      return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70&& score < 80) {
    return 'C';
  } else if (score >= 60  && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
