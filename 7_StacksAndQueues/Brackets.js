function solution(S) {
    const pairs = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    let stack = []
    for (let x=0; x<S.length; x++) {
        if (pairs[stack[stack.length-1]] == S.charAt(x)) {
            stack.pop()
        } else {
            stack.push(S.charAt(x))
        } 
    }
    if (stack.length == 0) {
        return 1
    }
    return 0
}

module.exports = solution