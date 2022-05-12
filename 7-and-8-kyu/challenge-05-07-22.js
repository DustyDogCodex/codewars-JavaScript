/* Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2. */

function rowWeights(array){
  //your code here
  const first_team = []
  const second_team = []
  array.forEach((num,index) => {
    if(index % 2 == 0){
      first_team.push(num)
    } else {
      second_team.push(num)
    }
  })
  let first_team_weight = first_team.reduce((prev,curr) => prev + curr, 0)
  let second_team_weight = second_team.reduce((prev,curr) => prev + curr, 0)
  return [first_team_weight,second_team_weight]
}