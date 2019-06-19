/**
 * Idea: Build array of course differences and run maxSlice on it
 */
function maxSlice(A) {
    let maxEnding = 0
    let maxSlice = 0
    for (let x=0; x<A.length; x++) {
        maxEnding = Math.max(0, maxEnding + A[x])
        maxSlice = Math.max(maxSlice, maxEnding)
    } 
    return maxSlice
}

function solution(A) {
    let diff = []
    for (let x=1; x<A.length; x++) {
        diff.push(A[x] - A[x-1])
    }
    return maxSlice(diff)
}

module.exports = solution