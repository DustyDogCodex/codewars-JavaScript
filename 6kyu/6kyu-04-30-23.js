/* You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#). */

function portion(a, i, n) {

  let l = a.length
  ,   x = i < 0 ? l + i - n: i;
  
  if (x < 0 | x + n > l)
    return -1;
    
  return a.slice(x, x + n);
  
}

Description

/* Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10

On the side of evil we have:

    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
Input:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

    Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:

    Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
Output:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie. */

function goodVsEvil(good, evil){
  const good_array = good.split(' ') 
  const good_value = Number(good_array[0]) * 1 + Number(good_array[1]) * 2 + Number(good_array[2]) * 3 + Number(good_array[3]) * 3 + Number(good_array[4]) * 4 + Number(good_array[5]) *  10
  
  const evil_array = evil.split(' ')
  const evil_value = Number(evil_array[0]) * 1 + Number(evil_array[1]) * 2 + Number(evil_array[2]) * 2 + Number(evil_array[3]) * 2 + Number(evil_array[4]) * 3 + Number(evil_array[5]) * 5 + Number(evil_array[6]) * 10
  
  if(good_value > evil_value){
    return 'Battle Result: Good triumphs over Evil'
  } else if (evil_value > good_value){
    return 'Battle Result: Evil eradicates all trace of Good'
  } else if (good_value == evil_value){
    return 'Battle Result: No victor on this battle field'
  }
}

