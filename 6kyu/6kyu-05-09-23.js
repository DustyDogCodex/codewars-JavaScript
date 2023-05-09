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
