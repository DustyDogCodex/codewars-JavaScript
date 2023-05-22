/* For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]

where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

 */

function longestRepetition(s) {
  let char = '';
  let reps = 0;
  
  for (let i = 0; i < s.length; ++i){
    let count=0;
    for (let j = i; j < s.length; ++j)
      if (s[i] == s[j])
        count++;
      else
        break;
    if (count>reps){
      reps=count;
      char=s[i];
    }
  }  
  return [char,reps];
}
