/* Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false. */

function include(arr, item){
  return arr.includes(item)
}

/* Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 

It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL). */

function f(n){
  return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
};

/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
  let final_array = []
  a.forEach(item => {
    if(final_array.includes(item) == false){
      final_array.push(item)
    }
  })
  return final_array;
}


