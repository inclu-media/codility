function solution(N) {
    const binString = N.toString(2)
    let maxCount = 0
    let actCount = 0

    for (let x=0; x<binString.length; x++) {
      if (binString[x] == '0') {
        actCount++
      }
      else {
        maxCount = Math.max(actCount, maxCount)
        actCount = 0
      }
    }
    return maxCount
  }

  module.exports = solution


  