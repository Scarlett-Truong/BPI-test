function getRemainder(inputString){
  try{
    if(!inputString) return 'Invalid input'
    let state = 0
    const arr = inputString.split('')
    if(!arr.length) return 'Invalid input'
    for (let i=0; i< arr.length; i++){
      let ele = Number(arr[i])
      if(ele !== 0 && ele !== 1) return 'Invalid input'
      switch(state){
        case 0: 
          if(ele === 1) state = 1
          break
        case 1:
          if(ele === 0) state = 2
          else state = 0
          break
        case 2: 
          if(ele === 0) state = 1
          break
        default:
          return
      }
    }
    return state
  }
  catch(err){
    return `[Error] ${err}`
  }
}

console.log(getRemainder('10'))
console.log(getRemainder('110'))
console.log(getRemainder('1010'))

module.exports = getRemainder