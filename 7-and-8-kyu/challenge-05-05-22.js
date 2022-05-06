/* Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".
Examples:

(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
 */

function race(v1, v2, g) {
    // your code
  let time = 0
  let distanceA = g
  let distanceB = 0
  for(let i = 0; distanceB <= distanceA; i++){
    distanceA = g + (v1/3600 * i)
    distanceB = (v2/3600 * i)
    if(distanceA.toPrecision(4) == distanceB.toPrecision(4)){
      time = i
    }
  }
  let hrs = (time/3600).toPrecision(4)
  let hrs_array = hrs.toString().split('.')
  let mins = (`.${hrs_array[1]}` * 60).toPrecision(4)
  let mins_array = mins.toString().split('.')
  let secs = `.${mins_array[1]}` * 60
  if(isNaN(secs)){
    secs = 0
  }
  let time_array = [Number(hrs_array[0]),Number(mins_array[0]),Math.floor(secs)]
  return time_array
}

/* We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.  */

function plural(n) {
  return n == 1 ? false : true
}