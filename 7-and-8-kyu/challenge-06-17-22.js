/* The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
 */

function chromosomeCheck(sperm) {
  return sperm.includes("Y") ?  "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!) */

function vowelIndices(word){
  //your code here
  const vowels = ["a","e",'i','o','u','y']
  const letters_array = word.toLowerCase().split('')
  const result = []
  letters_array.forEach((letter,index) => {
    vowels.includes(letter) ? result.push(index+1) : ''
  })
  return result
}

/* This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times. */

const websites = []
for(let i = 1; i <= 1000; i++){
  websites.push('codewars')
}

/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */

function angle(n) {
  //code here
  return (2*n - 4) * 90
}

/* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

    a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.
Examples

isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false */

function isPowerOfTwo(n) {
  return Math.log2(n) % 1 === 0 ? true : false;
}




