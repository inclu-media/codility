function solution(A) {
    A.sort((a,b) => a-b)
    for (let x=0; x<A.length; x++) {
        if (A[x] !== x+1) {
            return 0
        }
    }
    return 1
}

module.exports = solution