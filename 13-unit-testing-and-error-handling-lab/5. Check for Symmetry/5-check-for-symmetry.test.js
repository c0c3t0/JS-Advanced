const { expect } = require('chai');
const isSymmetric = require('./5-check-for-symmetry');

describe('Check for Symmetry Tests', () => {
    it('should take an array as an argument', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return false for non-correct input type', () => {
        expect(isSymmetric(2)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(8.12)).to.be.false;
        expect(isSymmetric('gosho')).to.be.false;
    });

    it('should return true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return false if array is non-symmetric', () => {
        expect(isSymmetric([1, 2, 1, 2])).to.be.false;
        expect(isSymmetric([1, 2, 3, 1, 2])).to.be.false;
        expect(isSymmetric([1, 2, 3, '2', 1])).to.be.false;
    });
})
