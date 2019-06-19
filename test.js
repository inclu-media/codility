const assert = require('assert');

const genomicRangeQuery = require('./5_PrefixSums/GenomicRangeQuery.js')
const countDiv = require('./5_PrefixSums/CountDiv.js')

const maxProductOfThree = require('./6_Sorting/MaxProductOfThree.js')
const distinct = require('./6_Sorting/Distinct.js')
const triangle = require('./6_Sorting/Triangle.js')
const numberOfDiscIntersections = require('./6_Sorting/NumberOfDiscIntersections.js')

const brackets = require('./7_StacksAndQueues/Brackets.js')
const fish = require('./7_StacksAndQueues/Fish.js')
const nesting = require('./7_StacksAndQueues/Nesting.js')
const stoneWall = require('./7_StacksAndQueues/StoneWall.js')

const dominator = require('./8_Leader/Dominator.js')
const equiLeader = require('./8_Leader/EquiLeader.js')

const maxProfit = require('./9_MaximumSliceProblem/MaxProfit.js')
const maxSliceSum = require('./9_MaximumSliceProblem/MaxSliceSum.js')

describe('Lesson 5 - Prefix Sum', () => {

    describe('GenomicRangeQuery', () => {
        it('demo data', () => {
            assert.deepEqual(genomicRangeQuery('CAGCCTA', [2,5,0], [4,5,6]), [2,4,1])
        })
    })

    describe('CountDiv', () => {
        it('demo data', () => {
            assert.equal(countDiv(6, 11, 2), 3)
        })
        it('A == B', () => {
            assert.equal(countDiv(7, 7, 1), 1)
        })
        it('K is prime (7919)', () => {
            assert.equal(countDiv(0, 10000, 7919), 2)
        })
    })
})

describe('Lesson 6 - Sorting', () => {

    describe('MaxProductOfThree', () => {
        it('demo data', () => {
            assert.equal(maxProductOfThree([-3,1,2,-2,5,6]), 60)
        })
        it('[10,10,10]', () => {
            assert.equal(maxProductOfThree([10,10,10]), 1000)
        })
    })

    describe('Distinct', () => {
        it('demo data', () => {
            assert.equal(distinct([2,1,1,2,3,1]), 3)
        })
        it('empty array', () => {
            assert.equal(distinct([]), 0)
        })
    })

    describe('Triangle', () => {
        it('demo data', () => {
            assert.equal(triangle([10,2,5,1,8,20]), 1)
        })
        it('empty array', () => {
            assert.equal(triangle([]), 0)
        })
    })

    describe('NumberOfDiscIntersections', () => {
        it('demo data', () => {
            assert.equal(numberOfDiscIntersections([1,5,2,1,4,0]), 11)
        })
    })
})

describe('Lesson 7 - Stacks and Queues', () => {

    describe('Brackets', () => {
        it('demo data 1', () => {
            assert.equal(brackets("{[()()]}"), 1)
        })
        it('demo data 2', () => {
            assert.equal(brackets( "([)()]"), 0)
        })
    })

    describe('Fish', () => {
        it('demo data', () => {
            assert.equal(fish([4,3,2,1,5],[0,1,0,0,0]), 2)
        })
    })

    describe('Nesting', () => {
        it('demo data 1', () => {
            assert.equal(nesting( "(()(())())"), 1)
        })
        it('demo data 2', () => {
            assert.equal(nesting("())"), 0)
        })
    })

    describe('StoneWall', () => {
        it('demo data 1', () => {
            assert.equal(stoneWall([8,8,5,7,9,8,7,4,8]), 7)
        })
        it('one block', () => {
            assert.equal(stoneWall([10]), 1)
        })
        it('same height', () => {
            assert.equal(stoneWall([10,10,10,10,10]), 1)
        })
    })
})

describe('Lesson 8 - Leader', () => {

    describe('Dominator', () => {
        it('demo data', () => {
            assert.equal(dominator([3,4,3,2,3,-1,3,3]), 0)
        })
        it('empty input', () => {
            assert.equal(dominator([]), -1)
        })
        it('single value', () => {
            assert.deepEqual(dominator([10]), 0)
        })
        it('no dominator', () => {
            assert.equal(dominator([1,2,3,4,5,6,7,8,9]), -1)
        })
    })

    describe('EquiLeader', () => {
        it('demo data', () => {
            assert.equal(equiLeader([4,3,4,4,4,2]), 2)
        })
        it('single value', () => {
            assert.equal(equiLeader([10]), 0)
        })
    })

})

describe('Lesson 8 - Maximum Slice Problem', () => {

    describe('MaxProfil', () => {
        it('demo data', () => {
            assert.equal(maxProfit([23171,21011,21123,21366,21013,21367]), 356)
        })
    })

    describe('MaxSliceSum', () => {
        it('demo data', () => {
            assert.equal(maxSliceSum([3,2,-6,4,0]), 5)
        })
    })

})