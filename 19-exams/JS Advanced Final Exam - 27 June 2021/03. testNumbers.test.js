const testNumbers = require('./03. testNumbers');
const { expect } = require('chai');

describe('testNumbers tests', () => {
    describe('sumNumber(num1, num2) tests', () => {
        it('should return undefined if input is invalid', () => {
            expect(testNumbers.sumNumbers('', 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers([], 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(true, 3)).to.equal(undefined);

            expect(testNumbers.sumNumbers(3, '')).to.equal(undefined);
            expect(testNumbers.sumNumbers(3,[])).to.equal(undefined);
            expect(testNumbers.sumNumbers(3,{})).to.equal(undefined);
            expect(testNumbers.sumNumbers(3, undefined)).to.equal(undefined);
            expect(testNumbers.sumNumbers(3, true)).to.equal(undefined);
        });

        it('should return the sum', () => {
            expect(testNumbers.sumNumbers(-3, -3)).to.equal('-6.00');
            expect(testNumbers.sumNumbers(3, -3)).to.equal('0.00');
            expect(testNumbers.sumNumbers(3, 3)).to.equal('6.00');
            expect(testNumbers.sumNumbers(3.5, 3.5)).to.equal('7.00');
            expect(testNumbers.sumNumbers(-3.5, 3.5)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-3.5, -3.5)).to.equal('-7.00');
        });
    });

    describe('numberChecker(input) tests', () => {
        it('', () => {

        });
    });

    describe('averageSumArray(arr) tests', () => {
        it('', () => {

        });
    });

})