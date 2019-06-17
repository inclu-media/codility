const assert = require('assert');

const genomicRangeQuery = require('./5_PrefixSums/GenomicRangeQuery.js')
const countDiv = require('./5_PrefixSums/CountDiv.js')

const maxProductOfThree = require('./6_Sorting/MaxProductOfThree.js')
const distinct = require('./6_Sorting/Distinct.js')
const triangle = require('./6_Sorting/Triangle.js')
const numberOfDiscIntersections = require('./6_Sorting/NumberOfDiscIntersections.js')

const brackets = require('./7_StacksAndQueues/Brackets.js')

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
})