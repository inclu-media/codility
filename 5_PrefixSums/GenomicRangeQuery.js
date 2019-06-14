/**
 * Given a sequence CAGCCTA calculate the pref sums for each nucleotide 
 * e.g. for A .. ps = [0,1,1,1,1,1,2]
 * This can be used to calculate if A occuurs in specific ranke
 * ps[6] - ps[0] = 2 - 0 > 0 ... A appears in [0..6]
 * ps[4] - ps[2] = 1 - 1 = 0 ... A does not appear in [2..4] 
 */

function psMatrix(strSequ) {
    const l = strSequ.length
    let matrix = [[0],[0],[0]]
    
    for (x=0; x<strSequ.length; x++) {
      matrix[0][x+1] = strSequ.charAt(x) == 'A' ? matrix[0][x] + 1 : matrix[0][x]
      matrix[1][x+1] = strSequ.charAt(x) == 'C' ? matrix[1][x] + 1 : matrix[1][x]
      matrix[2][x+1] = strSequ.charAt(x) == 'G' ? matrix[2][x] + 1 : matrix[2][x]
    }
     
    return matrix
  }
  
  function solution(S, P, Q) {
    const result = []
    const psArr = psMatrix(S)
    
    for (let x=0; x<P.length; x++) {
        if (psArr[0][Q[x]+1] - psArr[0][P[x]] > 0) {
          result[x] = 1
        } else if (psArr[1][Q[x]+1] - psArr[1][P[x]] > 0) {
          result[x] = 2
        } else if (psArr[2][Q[x]+1] - psArr[2][P[x]] > 0) {
          result[x] = 3
        } else {
          result[x] = 4
        }
    }
    
    return result
  }

  module.exports = solution