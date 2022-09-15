/* Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

const rps = (p1, p2) => {
  const map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};

/* You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2". */

function shortenToDate(longDate) {
    return longDate.split(",")[0];
}

/* Task

Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line (don't forget to put the str in the parentheses).

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata. */

function helloWorld() {
  let str = "Hello World!"
  console.log(str)
}

/* Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
number 	price (cents)
n < 5 	100
n >= 5 and n < 10 	95
n >= 10 	90 */

function saleHotdogs(n){
  return n * (n >= 10 ? 90 : n >= 5 ? 95 : 100)
}
