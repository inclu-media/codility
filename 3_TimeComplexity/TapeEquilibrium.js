function solution(A) {
  
    // calculate prefix sum array O(n)
    let arrPsum = new Array(A.length)
    arrPsum[0] = A[0]
    for (let x=1; x<A.length; x++) {
      arrPsum[x] = A[x] + arrPsum[x-1]
    }
    
    // calculate splice weights O(n)
    let min = arrPsum[A.length-1]
    for (let x=0; x<A.length-1; x++) {
      let s1Weight = arrPsum[x]
      let s2Weight = arrPsum[A.length-1] - s1Weight
      const totWeight = Math.abs(s1Weight - s2Weight)
      min = Math.min(min, totWeight)
    }
    return min
  }

module.exports = solution