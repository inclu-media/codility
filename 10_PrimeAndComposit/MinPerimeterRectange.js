/**
 * Idea: find all divisors. factor = N/divisor.
 * perimeter = 2 * ( divisor + factor)
 * !! edge case N==1 !!
 */
function minPeri(N) {

    if (N == 1) {
        return 4
    }

    let x=0
    let peri = 0
    while(x*x < N) {
        if (N % x == 0) {
            const factor = N / x
            peri = peri == 0 ? 2*(x + factor) : Math.min(peri, 2*(x + factor))
        }
        x++
    }
    if (x*x == N) {
        peri = Math.min(peri, 4*x)
    }
    return peri
}

function solution(N) {
    return minPeri(N)
}

module.exports = solution