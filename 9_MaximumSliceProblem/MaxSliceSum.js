/**
 * This is the classic max slice problem
 * with different init values
 */
function maxSlice(A) {
    let maxEnding = -1000000
    let maxSlice = -1000000
    for (let x=0; x<A.length; x++) {
        maxEnding = Math.max(A[x], maxEnding + A[x])
        maxSlice = Math.max(maxSlice, maxEnding)
    } 
    return maxSlice
}

function solution(A) {
    return maxSlice(A)
}

module.exports = solution