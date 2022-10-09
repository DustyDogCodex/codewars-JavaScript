/* For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
 */

function cookie(x){
  if(typeof x == 'string'){
    return "Who ate the last cookie? It was Zach!"
  } else if (typeof x == 'number'){
    let result = (x - Math.floor(x)) !== 0; 
   
    if (result) {
      return "Who ate the last cookie? It was Monica!";
    } else {
      return "Who ate the last cookie? It was Monica!";
    }
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}

/* Grasshopper Order of Operations

You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators. */

function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

/* Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1. */

function nbDig(n, d) {
  let res = 0;
  for (let i=0; i <= n; i++){
      let sq = (i*i+"").split("");
      sq.forEach((s) => s == d ? res++ : null)
  }
  return res;
}

