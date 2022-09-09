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
            expect(testNumbers.sumNumbers(3, [])).to.equal(undefined);
            expect(testNumbers.sumNumbers(3, {})).to.equal(undefined);
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
        it('should throw if input is invalid', () => {
            expect(() => { testNumbers.numberChecker('j') }).to.throw('The input is not a number!');
            expect(() => { testNumbers.numberChecker(['j']) }).to.throw('The input is not a number!');
            expect(() => { testNumbers.numberChecker({ 'j': 4 }) }).to.throw('The input is not a number!');
            expect(() => { testNumbers.numberChecker(undefined) }).to.throw('The input is not a number!');
        });

        it('should return proper if number is even', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
        });

        it('should return proper if number is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray(arr) tests', () => {
        it('should return proper result', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4])).to.equal(2.5);
            expect(testNumbers.averageSumArray([1, -2, -3, 4])).to.equal(0);
        });
    });
})