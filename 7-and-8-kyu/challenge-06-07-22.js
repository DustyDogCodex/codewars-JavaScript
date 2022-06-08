/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow */

function updateLight(current) {
  switch(current){
      case "green":
        return "yellow"
      case "yellow":
        return "red"
      case "red":
        return "green"
  }
}

/* Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not. */

function spEng(sentence){
//write your code here
  return sentence.toLowerCase().includes("english")
}
