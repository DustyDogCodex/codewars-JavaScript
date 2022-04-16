//March 17th 2022

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
    let prod = 1;
    x.forEach( n => prod = prod * n)
    return prod;
}

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list. */

function invert(array) {
    let invert_array = [];
    array.forEach(num => { 
      num = -num;
      invert_array.push(num);
    })
    return invert_array;
}

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    const split_string_array = dna.split('');
    const RNA_array = []
    split_string_array.map(item => {
      if (item == 'T'){
        item = 'U';
        RNA_array.push(item);
      } else {
        RNA_array.push(item);
      }
    });
    let RNA_string = RNA_array.join('');
    return RNA_string;
}

/* Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

class SmallestIntegerFinder { // class was part of the given code not my addition
    findSmallestInt(args) {    
      return Math.min(...args);
    }
  }

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
  
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */
  
function isIsogram(str){
    const str_length = str.length;
    const str_array = str.toLowerCase().split('');
    
    const str_set = new Set(str_array)
    
    const unique_items = str_set.size;
    if (str_length == unique_items){
      return true;
    } else {
      return false;
    }
}  

/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
	//total number of prime numbers is the sum of the indexes
  //the answer is the sum of the numbers in the nth row (last n numbers in nth index)
  let sum_Indexes = 0;
  for (let i =0; i <= n; i++) {
    sum_Indexes += i;
  }
  
  let last_num_in_row = (2*sum_Indexes) - 1;
  
  //diff between first and last number in a row is (n-1)*2
  let first_num_in_row = last_num_in_row - ((n-1)*2);
  
  let sum = 0;
  //adding all odd numbers between first and last number
  for (let i = first_num_in_row; i <= last_num_in_row; i+=2){
      sum += i;
  }
  return sum;  
}


