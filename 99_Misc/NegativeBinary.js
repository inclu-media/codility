/**
 * Conver a negative binary
 * @param {0|1} A Array representing a neg binare (Base -2) integer
 * 
 * Naive solution: negbin -> dec -> -dec -> negbin
 * Effecient solution (check theorie):
 * {1,0} -> {1,1}
 * {1,1} -> {1,0}
 * {0} -> {0}
 */
function convertNegBinToDec(A) {
    let dec =0
    for (let x=0; x<A.length; x++) {
        dec += A[x]*Math.pow((-2),x)
    }
    return dec
}

function solution(A) {
    let negated = []
    for (let x=0; x<A.length; x++) {
        if (A[x] == 1 && A[x+1] == 0) {
            negated = [...negated,1,1]
            x++
        } else if(A[x] == 1 && A[x+1] == 1) {
            negated = [...negated,1,0]
            x++
        } else if (A[x] == 0) {
            negated = [...negated,0]
        } else if (A[x] == 1 && x == A.length-1) {
            negated = [...negated,1,1]
        }
    }
    if (negated[negated.length-1] == 0) {
        negated.pop()
    }

    // test
    console.log(`${negated.join()} -> ${convertNegBinToDec(negated)}`)
    
    return negated
}

module.exports = solution