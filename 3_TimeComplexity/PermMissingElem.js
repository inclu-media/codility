function solution(A) {
    A.sort((a,b) => a-b)

    // not specified in the instructions
    if (A.length == 1) {
        return 0
    }

    for (let x=0; x<A.length; x++) {
        if (A[x] !== x+1) {
            return x+1
        }
    }
    return A.length + 1
}

module.exports = solution