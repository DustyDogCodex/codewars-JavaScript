/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */

function encrypt(text, n) {
  if(n == 0 || n < 0 || text == '' || text == null){
    return text
  }
  let letter_array = text.split('')
  let str = ''
  for(let i = 0; i <= n; i++){
    let current_str 
    if(i > 1){
      current_str = str.split('')
    } else {
      current_str = text.split('')
    }
    let even_str = ''
    let odd_str = ''
    current_str.forEach((letter,index) => {
      if(index % 2 == 0){
        even_str += letter
      } else {
        odd_str += letter
      }
    })
    str = odd_str + even_str 
  }
  return str
}


function decrypt(encryptedText, n) {
  if(n == 0 || n < 0 || encryptedText == '' || encryptedText == null){
    return encryptedText
  }
  let str = ''
  for(let x = 0; x <= n; x++){
    let current_iteration
    if(x > 1){
      current_iteration = str
    } else {
      current_iteration = encryptedText
    }
    let midpoint = Math.floor(current_iteration.length/2)
    let odd_str = current_iteration.slice(0,midpoint)
    let even_str = current_iteration.slice(midpoint, current_iteration.length)
    const decrypt_array = []
    const odd_array = odd_str.split('')
    const even_array = even_str.split('')
    for(let i = 0; i < current_iteration.length; i++){
      if (i % 2 == 0){
        decrypt_array.push(even_array[i/2])
      } else {
        decrypt_array.push(odd_array[Math.floor(i/2)])
      }
    }
    str = decrypt_array.join('')
  }
  return str
}

/* Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0. */

function combat(health, damage) {
  // Write your code here
  if(health - damage > 0){
    return health - damage
  } else if(health -damage <= 0){
    return 0
  }
}

