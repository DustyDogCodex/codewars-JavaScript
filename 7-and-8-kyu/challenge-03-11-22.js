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

/* Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

    sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

    sharkSpeed = how fast it can move in metres/second.

    pontoonDistance = how far you need to swim to safety in metres.

    youSpeed = how fast you can swim in metres/second.

    dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

    The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!". */

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) {
     sharkSpeed /= 2
   }
  
  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}


