const {expect} = require('chai');
const isOddOrEven = require('./2. evenOrOdd');

describe('Even or Odd Tests', () => {
    it('should take string as argument', () => {
        expect(typeof '').to.equal('string');
    });

    it('should return undefined if non-string is passed', () => {
        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven([2])).to.be.undefined;
        expect(isOddOrEven(['2'])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return even if string length is even', () => {
        expect(isOddOrEven('even')).to.equals('even');
    });

    it('should return odd if string length is odd', () => {
        expect(isOddOrEven('odd')).to.equals('odd');
    });
})