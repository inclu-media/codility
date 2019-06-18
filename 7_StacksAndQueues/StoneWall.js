/**
 * Solution: https://codility.com/media/train/solution-stone-wall.pdf
 */

function solution(H) {
    let blocks = 0
    let stack = []

    for (let x=0; x<H.length; x++) {
        while (stack.length > 0 && stack[0] > H[x]) {
            stack.shift()
        }
        if (stack.length > 0 && stack[0] == H[x]) {}
        else {
            blocks++
            stack.unshift(H[x])
        }

        console.log(`stack: ${stack} blocks: ${blocks}`)
    }

    return blocks
}

module.exports = solution