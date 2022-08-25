/* Definition

An element is leader if it is greater than The Sum all the elements to its right side.
Task

Given an array/list [] of integers , Find all the LEADERS in the array. */

const arrayLeaders = numbers => {

    return numbers.filter((v,i,arr)=>v>(arr.slice(i+1).reduce((a,b)=>a+b,0)))

}