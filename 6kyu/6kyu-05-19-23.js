/* Task

Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.
Example:

n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

Note

Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger. */

function pascalsTriangle(numRows) {
    if (numRows == 0){
        return [];
    }
    if (numRows == 1) {
        return [1];
    }

    let final_array = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        final_array.push(arr);
    }
    return final_array.flat();
}
