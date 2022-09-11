const numberOperations = require('./03. numberOperations');
const { expect } = require('chai');

describe('numberOperations tests', () => {
    describe('powNumber(num) tests', () => {
        it('should power properly', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(2.5)).to.equal(6.25);
            expect(numberOperations.powNumber(-2.5)).to.equal(6.25);
        });
    });

    describe('numberChecker(input) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => { numberOperations.numberChecker('hi') }).to.throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker(['hi']) }).to.throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker({ 'hi': 2 }) }).to.throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker(undefined) }).to.throw('The input is not a number!');
        });

        it('should return proper message if input is lower than 100', () => {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });

        it('should return proper message if input is greater than 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });

    });

    describe('sumArrays(array1, array2)', () => {
        it('should return proper result', () => {
            expect(numberOperations.sumArrays([3, 5, 7], [2, 4, 6])).to.deep.equal([5, 9, 13]);
            expect(numberOperations.sumArrays([3, 5, 7, 1], [2, 4, 6])).to.deep.equal([5, 9, 13, 1]);
            expect(numberOperations.sumArrays([3, 5, 7], [2, 4, 6, 1])).to.deep.equal([5, 9, 13, 1]);
        });
    });
})