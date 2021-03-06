const assert = require('assert');

const binaryGap = require('./1_Iterations/BinaryGap.js')

const oddOccurencesInArray = require('./2_Arrays/OddOccurencesInArray.js')
const cyclicRotation = require('./2_Arrays/CyclicRotation.js')

const frogJmp = require('./3_TimeComplexity/FrogJmp.js')
const permMissingElem = require('./3_TimeComplexity/PermMissingElem.js')
const tapeEquilibrium = require('./3_TimeComplexity/TapeEquilibrium.js')

const permCheck = require('./4_CountingElements/PermCheck.js')

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
const maxDoubleSliceSum = require('./9_MaximumSliceProblem/MaxDoubleSliceSum.js')

const countFactors = require('./10_PrimeAndComposit/CountFactors.js')
const minPerimeterRectangle = require('./10_PrimeAndComposit/MinPerimeterRectange.js')
const peaks = require('./10_PrimeAndComposit/Peaks.js')

const strSymmetryPoint = require('./99_Misc/StrSymmetryPoint.js')
const negativeBinary = require('./99_Misc/NegativeBinary.js')
const knightMoves = require('./99_Misc/KnightMoves.js')
const codilityDemoTest = require('./99_Misc/CodilityDemoTest.js')

describe('Lesson 1 - Iterations', () => {

    describe('Binary Gab', () => {
        it('demo data', () => {
            assert.equal(binaryGap(1041), 5)
        })
        it('demo data', () => {
            assert.equal(binaryGap(32), 0)
        })
    })

})

describe('Lesson 2 - Arrays', () => {

    describe('Odd Occurences in Array', () => {
        it('demo data', () => {
            assert.equal(oddOccurencesInArray([9,3,9,3,9,7,9]),7)
        })
    })

    describe('Cyclic Rotation', () => {
        it('demo data', () => {
            assert.deepEqual(cyclicRotation([3,8,9,7,6],3),[9,7,6,3,8])
        })
    })
})

describe('Lesson 3 - Time Complexity', () => {

    describe('FrogJmp', () => {
        it('demo data', () => {
            assert.equal(frogJmp(10,85,30),3)
        })
    })

    describe('PermMissingElem', () => {
        it('demo data', () => {
            assert.equal(permMissingElem([2,3,1,5]),4)
        })
    })

    describe('TapeEquilibrium', () => {
        it('demo data', () => {
            assert.equal(tapeEquilibrium([3,1,2,4,3]),1)
        })
    })

})

describe('Lesson 4 - Counting Elements', () => {

    describe('PermCheck', () => {
        it('simple positive', () => {
            assert.equal(permCheck([4,1,3,2]),1)
        })
        it('simple negative', () => {
            assert.equal(permCheck([4,1,3]),0)
        })
        it('single element positive', () => {
            assert.equal(permCheck([1]),1)
        })
        it('single element negative', () => {
            assert.equal(permCheck([10]),0)
        })
        it('single element extreme max', () => {
            assert.equal(permCheck([1000000]),0)
        })
    })
})

/*
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

    describe('MaxDoubleSliceSum', () => {
        it('demo data', () => {
            assert.equal(maxDoubleSliceSum([3,2,6,-1,4,5,-1,2]), 17)
        })
        it('min data', () => {
            assert.equal(maxDoubleSliceSum([1,2,3]), 0)
        })
    })

})

describe('Lesson 10 - Prime and Composite Numbers', () => {

    describe('CountFactors', () => {
        it('demo data 1', () => {
            assert.equal(countFactors(24), 8)
        })
        it('demo data 2', () => {
            assert.equal(countFactors(36), 9)
        })
        it('min', () => {
            assert.equal(countFactors(1), 1)
        })
        it('max prime', () => {
            assert.equal(countFactors(2147483647), 2)
        })
    })

    describe('MinPerimeterRectangle', () => {
        it('demo data', () => {
            assert.equal(minPerimeterRectangle(30), 22)
        })
    })

    describe('Peaks', () => {
        it('demo data', () => {
            assert.equal(peaks([1,2,3,4,3,4,1,2,3,4,6,2]), 3)
        })
    })

})

describe('Lesson 99 - Misc', () => {
    
    describe('StrSymmetryPoint', () => {
        it('demo data', () => {
            assert.equal(strSymmetryPoint('racecar'), 3)
        })
    })

    describe('negativeBianry', () => {
        it('9 -> -9', () => {
            assert.deepEqual(negativeBinary([1,0,0,1,1]), [1,1,0,1])
        })
        it('5 -> -5', () => {
            assert.deepEqual(negativeBinary([1,0,1]), [1,1,1,1])
        })
    })

    describe('knightMoves', () => {
        it('demo data', () => {
            assert.equal(knightMoves(6,[3,4],[0,0]), 3)
        })
        it('30x30 field', () => {
            assert.equal(knightMoves(30,[0,0],[29,29]), 19)
        })
    })

    describe('codilityDemoTest', () => {
        it('test 1', () => {
            assert.equal(codilityDemoTest([1, 3, 6, 4, 1, 2]), 5)
        })
        it('test 2', () => {
            assert.equal(codilityDemoTest([1,2,3]), 4)
        })
        it('test 3', () => {
            assert.equal(codilityDemoTest([-1,-3]), 1)
        })
        it('single element 1', () => {
            assert.equal(codilityDemoTest([1000000]), 1)
        })
        it('single element 2', () => {
            assert.equal(codilityDemoTest([-1000000]), 1)
        })
        it('single element 2', () => {
            assert.equal(codilityDemoTest([2]), 1)
        })
    })  
})

*/
