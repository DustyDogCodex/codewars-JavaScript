/* Task

misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

If everything is right, click "Submit" again to submit your code pass this kata. */

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

/* Task

Coding in function padIt, function accept 2 parameters:

    str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
    n, it's a number, how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string. */

function padIt(str,n){
  //coding here
  let i = 0
  let left_side = ''
  let right_side = ''
  while(i < n){
    i % 2 == 0 ? left_side += "*" : right_side += "*"
    i++
  }
  return left_side+str+right_side
}

