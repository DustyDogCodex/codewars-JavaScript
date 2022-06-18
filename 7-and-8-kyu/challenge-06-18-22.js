/* This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29
 */

function evaporator(content, evap_per_day, threshold){ 
  let counter = 0
  let threshold_limit = content * (threshold/100)
  for(let i = 1; content > threshold_limit; i++){
    content -= content * (evap_per_day/100)
    counter = i
  }
  return counter
}