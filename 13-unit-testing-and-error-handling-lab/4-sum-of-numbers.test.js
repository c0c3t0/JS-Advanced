const { expect } = require('chai');
const sum = require('./4-sum-of-numbers');

describe('Sum of Numbers Tests', () => {
    it('should take an array as an argument', () => {
        let argument = [1, 2];
        expect(argument).to.be.an('array');
    });

    it('should return NaN if array contains invalid data', () => {
        expect(sum(['pesho', 'gosho', 'stamo'])).to.be.NaN;
    });

    it('should return sum of all arrays elements', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
        expect(sum([-1, -2, -3])).to.be.equal(-6);
        expect(sum([1, '2', 3])).to.be.equal(6);
        expect(sum([-1, '2', 3])).to.be.equal(4);
        expect(sum([0, '0', 0])).to.be.equal(0);
    });

    it('shoule return zero if array length is zero', () => {
        expect(sum([])).to.be.equal(0);
    });
})
