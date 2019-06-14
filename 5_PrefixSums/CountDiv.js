/**
 * A=a*K, B=b*K
 * a'=floor(A/K), b'=floor(B/K)
 * result=b'-a'
 * O(1)
 * 
 * Ex1: A=10, B=30, K=10 => a'=1, b'=3, result=2 (wrong -> +1)
 * Ex2: A=17, B=25, K=5 => a'=3, b'=5, result=2 (20, 25)
 * Ex3: A=17, B=22, K=5 => a'=3, b'=4, result=1 (20)
 */
function solution(A, B ,K) {
    let res = Math.floor(B/K) - Math.floor(A/K)
    if (A % K == 0) res++
    return res
}

module.exports  = solution