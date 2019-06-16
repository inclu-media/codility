/**
 * Finding: if the array is sorted ascending
 * and A[P] + A[Q] > A[R], the remaining two
 * conditions are implicitly true
 */
function solution(A) {
    A.sort((a,b) => a - b)
    for (let x=0; x<A.length-2; x++) {
        if (A[x] + A[x+1] > A[x+2]) {
            return 1
        }
    }
    return 0
}

module.exports = solution