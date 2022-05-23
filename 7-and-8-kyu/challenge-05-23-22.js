/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

/* Now you have to write a function that takes an argument and returns the square of it. */

const square = n => n * n