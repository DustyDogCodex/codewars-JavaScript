/* Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers. */

function roundToNext5(n) {
  // ...
  let remainder = n % 5
  
  if (remainder == 0){
    return n
  } 
  
  if(remainder > 0){
    return n + (5 - remainder)
  } else {
    return n - remainder // for n =-2, rem = -2: -2 + (-2 + 5)
  }
}

/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." */

function uefaEuro2016(teams, scores){
  // your code...
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`   
  } else if (scores[1] > scores[0]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else if (scores[0] == scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  } 
}

/* Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces

input: 'CodeWars'

output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'

Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas' */

function sortMyString(S) {
  const letters = S.split('')
  const evens = []
  const odds = []
  letters.forEach((letter,index) => {
    index % 2 == 0 ? evens.push(letter) : odds.push(letter) 
  })
  return evens.join('') + ' ' + odds.join('') 
}


