/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 */

function formatDuration (seconds) {
  // Complete this function
  let remainderSecs = seconds % 60 
  let remainderMins = Math.floor((seconds % 3600) / 60)  //modulus returns how many mins are left after accounting for all days. Division by 60 converts the seconds to minutes
  let remainderHours = Math.floor((seconds % 86400) / 3600)  //modulus returns how many secs are left after all accounting for all seconds in closest integer value for days (1 day = 86400 seconds). The remaining seconds are converted to hours be dividing by 3600
  let remainderDays = Math.floor((seconds % 31536000) / 86400) // same logic as above. 1 year = 31536000 seconds 
  let remainderYears = Math.floor((seconds- seconds % 31536000) / 31536000) 

  let time_object = {a: remainderYears, b: remainderDays, c: remainderHours, d: remainderMins, e: remainderSecs}
  let str = ''

  for(item of Object.keys(time_object)) {
    if(item == "a") {
      time_object[item] += " year";
    } else if(item == "b") {
      time_object[item] += " day";
    } else if(item == "c") {
      time_object[item] += " hour";
    } else if(item == "d") {
      time_object[item] += " minute";
    } else if(item == "e") {
      time_object[item] += " second";
    }

    if(time_object[item].match(/(\d+)/)[0] >1) {
      time_object[item] += "s";
    }

    if(time_object[item].match(/(\d+)/)[0] == 0) {
      delete time_object[item];
    }
  }

  let values_array = Object.values(time_object)
  for(let i = 0; i < values_array.length; i++){
    if(values_array.length > 1 && i == values_array.length - 2){
      values_array[i] += ' and '
    } else if (i == values_array.length - 1){
      continue; 
    } else {
      values_array[i] += ', '
    }
  }
  str = values_array.join('')
  if(seconds == 0){
    str = 'now'
  }
  return str
}