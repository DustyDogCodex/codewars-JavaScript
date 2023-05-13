/* Write a function

tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0
Examples

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1 */

function tripledouble(num1, num2) {
   
  let num1_array = num1.toString().split("");
  let triple = 0;
  //testing for triples
  for(let i=0; i < num1_array.length; i++){
    if(num1_array[i] === num1_array[i+1] && num1_array[i] === num1_array[i+2]){
      triple = num1_array[i];
      break;
    }
  }
  
  let num2_array = num2.toString().split("");
  //testing for doubles and if its equal to triple
  for(let i = 0; i < num2_array.length; i++){
    if(num2_array[i] === num2_array[i+1] && num2_array[i] === triple){
      return 1;
    }
  }
  return 0;
}