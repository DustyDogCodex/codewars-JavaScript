function slicesToName(n) {
  let str = ''
  console.log(typeof n)
  if( n < 0 || typeof n != 'number'){
    return null;
  } else if (n % 2 == 0){
    str += 'sandwich'
  } else {
    str += 'bread'
  }
  
  for (let i = 1; i < n/2; i++){
    str += ' sandwich'
  }
  return str;
}

function nameToSlices(name) {
  let sando_array = name.split(' ')
  console.log(sando_array)
  let slices =''
  let bread_position = sando_array.lastIndexOf('bread')
  if (bread_position > 0){
    slices = null;
  } else if(sando_array[0] == 'bread'){
    slices = 1 + (sando_array.length - 1)*2
  } else {
    slices = sando_array.length * 2
  }
  return slices;
}

console.log(slicesToName('bread'))
console.log(nameToSlices('sandwich sandwich bread sandwich'))