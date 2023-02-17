module.exports = function check(str, bracketsConfig) {
  let map = {}
  const start = []
  bracketsConfig.forEach((element) => {
    start.push(element[0])
    map[element[1]] = element[0]
  })
  //console.log(map)
  // console.log(`start: ${start}`)
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let current = str[i]
    //  console.log(`current: ${current}`)
    if (start.includes(current)) {
      stack.push(current)
      //   console.log(`stack push: ${stack}`)
      if (
        stack[stack.length - 1] === map[current] &&
        stack[stack.length - 2] === current
      )
        stack.length = stack.length - 2
    } else {
      if (stack.length === 0) return false

      let last = stack[stack.length - 1]
      // console.log(`last: ${last}`)
      if (map[current] === last) {
        stack.pop()
        //  console.log(`stack pop: ${stack}`)
      } else {
        //  console.log('неверная последовательность')
        return false
      }
    }
  }
  return stack.length === 0
}

//  (){[]}
// idx: 5
//  cur: }
//  stack: | {
