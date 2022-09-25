/* This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

    The arguments are passed as strings.
    The numbers may be way very large
    Answer should be returned as a string
    The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!
 */

function multiply(a, b) {
  let a1 = a.split('').reverse();
  let b1 = b.split('').reverse();

  let num_array = [];

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < b1.length; j++) {
      let m = a1[i] * b1[j];
      num_array[i + j] = (num_array[i + j]) ? num_array[i + j] + m : m;
    }
  }

  for (let i = 0; i < num_array.length; i++) {
    let num = num_array[i] % 10;
    let move = Math.floor(num_array[i] / 10);
    num_array[i] = num;

    if (num_array[i + 1])
      num_array[i + 1] += move;
    else if (move != 0)
      num_array[i + 1] = move;
  }


  return num_array.reverse().join('').replace(/^(0(?!$))+/, "");
}