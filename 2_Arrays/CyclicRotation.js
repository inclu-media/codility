function solution(A, K) {
    if (A.length > 0) {
      for (let count=0; count<K; count++) {
         A.unshift(A.pop())
      }
    }
    return A
  }

module.exports = solution