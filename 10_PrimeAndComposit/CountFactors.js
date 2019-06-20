/**
 * Idea: Where there is a divisor, there is also a factor
 * -> use the divisor algorithm
 */
function factors(N) {
    let x=0
    let factors=0
    while(x*x < N) {
        if (N % x == 0) {
            factors += 2
        }
        x++
    }
    if (x*x == N) {
        factors++
    }
    return factors
}

function solution(N) {
    return factors(N)
}

module.exports = solution