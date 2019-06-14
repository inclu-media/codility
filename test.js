const assert = require('assert');

const countDiv = require('./5_PrefixSums/CountDiv.js')

describe('Lesson 5 - Prefix Sum', () => {
    describe('CountDiv', () => {
        it('demo data', () => {
            assert.equal(countDiv(6, 11, 2), 3)
        })
    })
})