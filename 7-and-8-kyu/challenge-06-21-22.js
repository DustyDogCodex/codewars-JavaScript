/* In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}

you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")

Task

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}

and return a string like this:

"This white dog has 4 legs."

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata. */

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
 */

function points(games) {
  // your code here
  let points_tally = 0
  games.forEach(game => {
    const match_results = game.split(':')
    if(match_results[0] > match_results[1]){
      points_tally += 3
    } else if (match_results[0] == match_results[1]){
      points_tally += 1
    }
  })
  return points_tally
}
/* 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(Number.isInteger(Math.sqrt(sq))){
    let square_root = Math.sqrt(sq)
    return (square_root + 1) ** 2
  }
  return -1;
}


