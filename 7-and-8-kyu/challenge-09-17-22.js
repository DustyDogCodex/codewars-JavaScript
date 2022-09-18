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