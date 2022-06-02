/* Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
 */

function validSolution(board){
	// check horizontal lines
	for(var j=0; j<9; j++){
	  if(!check(board[j])) return false;
	}
	
	// check vertical lines
	for(var j=0; j<9; j++){
	  var line = [];
	  for(var k=0; k<9; k++){
		line.push(board[k][j]);
	  }
	  if(!check(line)) return false;
	}
	
	// check 3x3 squares
	for(var j=0; j<9; j+=3){
	  for(var k=0; k<9; k+=3){
		var square = [];
		for(var l=j; l<j+3; l++){
		  for(var m=k; m<k+3; m++){
			square.push(board[l][m]);
		  }
		}
		if(!check(square)) return false;
	  }
	}
	
	// if it hasn't returned false so far then we
	// have a valid 9x9 square, so return true
	return true;
  }
  
  // checks that an array of length 9 contains 
  // exactly the numbers 1, 2, ..., 9
  function check(numbers){
	return numbers.slice(0).sort().every(function(e, i){return e==i+1;});
  }

/* A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" */

function solution(a){

    let AddSequenceToString = function (seq, s) {

        if (s) { s += ','; }
        s += (seq.length >= 3)? seq[0] + '-' + seq[seq.length - 1] : seq.join(',');
        return s;
    }

    let sequence = [];
    let s = '';

    for (let i = 0; i < a.length; ++i) {

        let n = a[i];

        if (sequence.length == 0 || sequence[sequence.length - 1] == n - 1) { 

            sequence.push(n);

        } else {

            s = AddSequenceToString(sequence, s);
            sequence = [n];
        }
    }

    s = AddSequenceToString(sequence, s);

    return s;
}
