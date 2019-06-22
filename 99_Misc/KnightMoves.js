/**
 * This problem was reported to be tested event though it does not appear
 * in the codility example tests. 
 * 
 * Given a square chessboard of N x N size, the position of Knight and position 
 * of a target is given. We need to find out minimum steps a Knight will take 
 * to reach the target position.
 * 
 * Algorithm  (BFS - breath first search):
 * - data structure: a queue with positions to evaluate
 *                   pathLength = 0
 * - from the given position x, calculate all 8 possible follow position
 * - for each follow position: 
 *   - position is within board
 *   - position has not been visited
 *   - push onto stack
 *   - increase pathLength by 1
 *   * if position is target -> output path length
 */

/**
 * Globals
 */
var moveQueue = []
var visited = []
var size = 0
var target = []
var moves = 0

function move(Xobj) {
    // coordinates added / removed for the next move
    const moveMatrix = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
    for (posNewPos of moveMatrix) {
        const newPos = [Xobj.pos[0] + posNewPos[0], Xobj.pos[1] + posNewPos[1]]
         // invalid move
         if (newPos[0] < 0 || newPos[0] > size-1 || newPos[1] < 0 || newPos[1] > size-1 ) {
             continue
         } 
         // already visited
         if (visited[newPos[0]][newPos[1]]) {
             continue
         }
         // target reached
         if (newPos[0] == target[0] && newPos[1] == target[1]) {
             moves = Xobj.dist + 1
             return true
         }
         // new move
         visited[newPos[0]][newPos[1]] = true
         const newPosObj = {
             pos: [newPos[0],newPos[1]],
             dist: Xobj.dist + 1
         }
         moveQueue.push(newPosObj)
    }
    return false
}


 /**
  * @param {int} N size of board (N*N) 
  * @param {[int,int]} starting position 
  * @param {[int,int]} end position 
  */
function solution(N,X,Y) {

    // initialisation
    size = N
    target = [Y[0],Y[1]]
    for (let x=0; x<size; x++) {
        let col = new Array(size)
        col.fill(false)
        visited.push(col)
    }
    moveQueue.push({
        pos: [X[0],X[1]],
        dist: 0
    })

    while(moveQueue.length > 0) {
        let posObj = moveQueue.shift()
        if (move(posObj)) {
            return moves
        }
    }
    return -1
}

module.exports = solution
