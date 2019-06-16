function solution(A) {
    A.sort((a,b) => a-b)
    let count = 0
    for (let x=0; x<A.length; x++) {
        if(x==0 || ( x > 0 && A[x] > A[x-1])) {
           count ++
        }
    }
    return count
}

module.exports = solution