/**
 * Idea: If x is a leader of A, then the leader of the sequences to be found 
 * is also x. 
 * 1. find this leader and the number of its occurences O(n)
 * 2. step through A and build sequences checking ther leader crit for each seq. O(n)
 */
function leader(A) {

    let _A = [...A]
    _A.sort((a,b) => a - b)

    let stack = []
    for (let x=0; x<_A.length; x++) {
        if (x == 0) {
            stack.push(_A[x])
        } else {
            if (stack.length > 0 && stack[stack.length-1] != _A[x]) {
                stack.pop()
            } else {
                stack.push(_A[x])
            }
        }
    }
    if (stack.length > 0) {
        const cand = stack[0]
        let count = 0
        for (let y=0; y<A.length; y++) {
            if (A[y] == cand) {
                count++
            }
        }
        if (count > A.length/2) {
            return {
                "leader": cand,
                "count": count
            }
        } else {
            return null
        }
    } else {
        return null
    }
}

function solution(A) {
    const leadObj = leader(A)
    if (leadObj != null) {
        const lead = leadObj.leader
        const count = leadObj.count
        let equiCount = 0
        let firstSliceLeaderCount = 0
        for (let x=0; x<A.length; x++) {
            const firstSliceLength = x+1
            const secondSliceLength = A.length - firstSliceLength
            if (A[x] == lead) {
                firstSliceLeaderCount++
            }
            const secondSliceLeaderCount = count - firstSliceLeaderCount
            if ((firstSliceLeaderCount > firstSliceLength/2) &&
                (secondSliceLeaderCount > secondSliceLength/2)) {
                    equiCount++
            }
        }
        return equiCount
    } else {
        return 0
    }
}

module.exports = solution