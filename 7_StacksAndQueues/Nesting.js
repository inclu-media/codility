function solution(S) {
    let stack = []
    for (let x=0; x<S.length; x++) {
        if (stack[stack.length-1] == '(' && S.charAt(x) == ')') {
            stack.pop()
        } else {
            stack.push(S.charAt(x))
        }
    }

    return stack.length == 0 ? 1 : 0
}

module.exports = solution