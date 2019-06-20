/**
 * Find the indices of the peaks
 * @param {int} A 
 */
function peakIndeces(A) {
    let peakArr = []
    for (let x=1; x<A.length-1; x++) {
        if (A[x] > A[x-1] && A[x] > A[x+1]) {
            peakArr.push(x)
        }
    }

    return peakArr
}

function solution(A) {
    const peaks = peakIndeces(A)
    if (peaks.length == 0) {
        return 0
    }

    // if there are n peaks, there can be max n blocks
    for (let size=peaks.length; size>0; size--) {
        if (A.length % size == 0) {
            const blockSize = A.length / size
            let lastBlockIndex = -1
            let found = 0
            for (peak of peaks) {
                let blockNr = Math.floor(peak / blockSize) // this is unclear
                if (blockNr > lastBlockIndex) {
                    lastBlockIndex = blockNr
                    found++
                }
            }
            if (found == size) {
                return size
            }
        }
    }

    return 0
}

module.exports = solution