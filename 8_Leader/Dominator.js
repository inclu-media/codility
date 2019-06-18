/**
 * Explanation of the algorithm:
 * https://codility.com/media/train/6-Leader.pdf
 */
function solution(A) {
    // sort the input
    const _A = [...A]
    A.sort((a,b) => a - b)

    // find the leader (stack method)
    let stack = []
    for (let x=0; x<A.length; x++) {
        if (x == 0) {
            stack.push(A[x])
        } else {
            if (stack.length > 0 && (stack[stack.length-1] != A[x])) {
                stack.pop()
            } else {
                stack.push(A[x])
            }
        }
    }

    if (stack.length > 0) {
        const cand = stack[0]
    
        // check cardinality of cand
        let count = 0
        for (let y=0; y<_A.length; y++) {
            if (_A[y] == cand) {
                count ++
            }
        }
        if (count >= Math.ceil(_A.length / 2)) {
            return _A.indexOf(cand)
        } else { // cand was not a leader
            return -1
        }
    } else { // no leader
        return -1
    }
}

module.exports = solution