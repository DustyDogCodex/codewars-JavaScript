/* This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */

function simpleMultiplication(number) {
    // your code........
    return (number % 2 == 0) ? number*8 : number*9
}

/* Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be a valid integer number.

X will be either a number or a string. Both are valid. */

function apple(x){
   return x*x > 1000 ? "It's hotter than the sun!!" :  'Help yourself to a honeycomb Yorkie for the glovebox.'
}

/* Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). */

function minValue(values){
    let unique = [...new Set(values)]; 
    unique.sort((a,b) => a-b);
    return parseInt(unique.join(''));
}



