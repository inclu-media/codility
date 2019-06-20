// TODO Optimize: halbieren 


function solution(S) {
    if (S.length % 2 == 0) {
        return -1
    }
    if (S.length == 1 ) {
        return 0
    }
    let center = Math.floor(S.length / 2)
    let x = center - 1
    let y = center + 1
    while(S.charAt(x) == S.charAt(y) && x>=0) {
        x--
        y++
    }
    return x==-1 ? center : -1
}

module.exports = solution