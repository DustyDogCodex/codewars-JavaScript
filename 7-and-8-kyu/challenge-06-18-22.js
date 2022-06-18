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

/* Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
 */

function howManydays(month){
  switch (month){
      case 2:
        return 28
      case 4:
        return 30
      case 6:
        return 30
      case 9:
        return 30
      case 11:
        return 30
      default:
        return 31
  }
}

/* Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop. */

function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i])
  }
  
  return [odd,even];
}