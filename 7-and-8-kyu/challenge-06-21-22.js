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
