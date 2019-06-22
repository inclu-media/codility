/**
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive 
integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

Copyright 2009–2019 by Codility Limited. 
All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {
    let unique = [...new Set(A)]
    unique.sort((a,b) => a - b)
    B = unique.filter(x => x > 0)

    if (B.length == 0) {
        return 1
    }
    for (x=1; x<=B.length+1; x++) {
        if (x == (B.length+1) || x != B[x-1]) {
            return x
        }
    }
}

module.exports = solution