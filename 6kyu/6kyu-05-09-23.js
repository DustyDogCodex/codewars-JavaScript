/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
 */

multiplicationTable = function(size) {
  // insert code here
  const columns = []
  const result = []
  for(let i = 1; i <= size; i++){
    columns.push(i)
  }
  result.push(columns)
  for(let j = 2; j <= size; j++){
    let row = []
    for(let k = 0; k <= columns.length - 1; k++){
        row.push(j * columns[k])
    }
    result.push(row)
  }
  return result
}

/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

 */

function cleanString(s) {
  if(s == ''){
    return ''
  }
  
  const result = [];

  for (const letter of s) {
        if (letter !== "#") {
            result.push(letter);
        } else if (result.length) {
            result.pop();
        }
    }

    return result.join('');
}