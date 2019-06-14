const assert = require('assert');

const countDiv = require('./5_PrefixSums/CountDiv.js')

describe('Lesson 5 - Prefix Sum', () => {
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