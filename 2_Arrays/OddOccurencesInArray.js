function solution(A) {
    A.sort((a,b) => a - b )
    for (let x = 0; x < A.length; x++ ) {
        if (x < A.length-1 &&  A[x] == A[x+1]) {
            x++;
        } else {
            return A[x]
        }
    }
}

module.exports = solution