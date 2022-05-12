/* Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".

 */

function hoopCount (n) {
   //your code goes here
  if (n>=10) {
    return "Great, now move on to tricks" 
  } else {
    return "Keep at it until you get it"
  }
}

/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

function litres(time) {
  return Math.floor(time*0.5);
}

/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd. */

function otherAngle(a, b) {
  return (180-a-b);
}

/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1
  } else if (month > 3 && month <= 6){
    return 2
  } else if (month > 6 && month <= 9){
    return 3
  } else {
    return 4
  }
}
/* 
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata */

function tribonacci(signature,n){
  //your code here
  if (n == 0) {
    return []
  } else if (n == 1){
    return [signature[0]]
  } else if (n == 2){
    return [signature[0],signature[1]]
  }
  const final_array = []
  signature.forEach(num => {
    final_array.push(num)
  })
  for(let i = 3; i < n; i++){
    let new_num = 0
    new_num = final_array[i-1] + final_array[i-2] + final_array[i-3]
    final_array.push(new_num)
  }
  return final_array
}

/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

/* Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
 */

function isDivideBy(number, a, b) {
  // good luck
  if(number%a == 0 && number%b ==0){
    return true
  } else {
    return false
  }
}

