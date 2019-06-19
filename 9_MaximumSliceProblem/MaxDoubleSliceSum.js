function solution(A) {

    let maxEndings = new Array(A.length)
    maxEndings = maxEndings.fill(0)
    for (let x=1; x<A.length-1; x++) {
        maxEndings[x] = Math.max(0, maxEndings[x-1] + A[x])
    }

    let maxStarts = new Array(A.length)
    maxStarts = maxStarts.fill(0)
    for (let z=A.length-2; z>0; z--) {
        maxStarts[z] = Math.max(0, maxStarts[z+1] + A[z])
    }


    let maxDSS = 0
    for (let y=1; y<A.length-1; y++) {
        maxDSS = Math.max(maxDSS, maxEndings[y-1] + maxStarts[y+1])
    }

    return maxDSS
}

module.exports = solution