/**  
 * Sorst descending
 * Assumption a: only pos numbers -> first 3
 * Assumption b: the last 2 are neg, the first pos
 * Pick the bigger one
 * O(nlog(n))
 */
function solution(A) {
    A.sort((a,b) => b-a )
    let prod1 = A[0] * A[1] * A[2]
    let prod2 = A[0] * A[A.length-2] * A[A.length-1]
    return Math.max(prod1, prod2)
}

module.exports = solution