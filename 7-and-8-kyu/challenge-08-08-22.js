/* Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/ */

const getASCII = c => c.charCodeAt(0);

/* Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck! */

function  calculateAge(birthYear, relativeYear){
  if (birthYear == relativeYear){
    return "You were born this very year!"
  } else if (Math.abs(birthYear - relativeYear) == 1){ 
    return (birthYear - relativeYear) == -1 ? 'You are 1 year old.' : 'You will be born in 1 year.'
  } else {
    return birthYear < relativeYear ? `You are ${relativeYear - birthYear} years old.` : `You will be born in ${birthYear - relativeYear} years.`
  }
}

/* Definition

Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
Task

Given a number, Find if it is Balanced or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

    The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

    Number passed is always Positive .

    Return the result as String

Input >> Output Examples

(balanced-num 7) ==> return "Balanced"

(balanced-num 295591) ==> return "Not Balanced"

(balanced-num 959) ==> return "Balanced"

(balanced-num 27102983) ==> return "Not Balanced" */

function balancedNum(number)
{
  let num = number.toString()
  let numLength 
  let midpoint1
  let midpoint2
  let midpoint
  const num_array = num.split('')
  
  if ((num.length % 2) == 0) {
    numLength = 'even' 
    midpoint1 = (num.length / 2) - 1
    midpoint2 = midpoint1 + 1
  }  else {
    numLength = 'odd'
    midpoint = Math.ceil(num.length/2) - 1
  }
  
  if (numLength == 'even'){
    let leftSum = 0
    let rightSum = 0
    for(let i = 0; i < midpoint1; i++){
      leftSum += Number(num_array[i])
    }
    for(let j = midpoint2 + 1; j < num_array.length; j++){
      rightSum += Number(num_array[j])
    }
    return leftSum == rightSum ? "Balanced" : "Not Balanced" 
  } else {
    let leftSum = 0
    let rightSum = 0
    for(let i = 0; i < midpoint; i++){
      leftSum += Number(num_array[i])
    }
    for(let j = midpoint + 1; j < num_array.length; j++){
      rightSum += Number(num_array[j])
    }
    return leftSum == rightSum ? "Balanced" : "Not Balanced"
  }
}
