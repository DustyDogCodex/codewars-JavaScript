/* Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
 */

function solution(input, markers) {
  let isFounded = false;
  let letters = input.split('');
  let stripped = letters.reduce((acc , letter) => {
    if(markers.includes(letter)) isFounded = true;
    if(isFounded && letter === '\n') isFounded = false;
    if(!isFounded) acc.push(letter)
      return acc;
  }, [])
  
  return stripped.join('').replace(/\s\n/ , '\n').trim();
};