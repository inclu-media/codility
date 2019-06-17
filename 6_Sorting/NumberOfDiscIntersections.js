/**
 * A good explanation of the algorith can be found on youtube:
 * https://www.youtube.com/watch?v=HV8tzIiidSw
 */

function solution(A) {
    // setp 1: collect start and endpoint of disks
    const startingPoints = []
    const endPoints = []
    for (let x=0; x<A.length; x++) {
        startingPoints.push(x-A[x])
        endPoints.push(x+A[x]) 
    }
    startingPoints.sort((a,b) => a - b)
    endPoints.sort((a,b) => a - b)
    
    // step 2: count intersections
    let openDisks = 0
    let intersec = 0
    let endIndex = 0
    let startIndex = 0
    while (startIndex < startingPoints.length) {
        if (startingPoints[startIndex] <= endPoints[endIndex]) { // disc opens
            intersec += openDisks
            if (intersec > 10000000) { // emergency break
                return -1
            } 
            openDisks++
            startIndex++
        } else { // disc closes
            openDisks--
            endIndex++
        }
    }

    return intersec
}

module.exports = solution