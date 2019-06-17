/**
 * Idea: Place all fish swimming upstteam (B[x]==1) on a stack
 * and let the fish on the stack compete against the rest
 */
function solution(A, B) {
    let kills = 0
    let stack = []

    for (let x=0; x<A.length; x++) {
        if (B[x] == 1) {
            stack.push(A[x])
        } else {
            while (stack.length > 0) {
                kills++
                if (stack[stack.length-1] > A[x]) {
                    break
                } else {
                    stack.pop()
                }
            }
        }
    }

    return (A.length - kills)
}

module.exports = solution