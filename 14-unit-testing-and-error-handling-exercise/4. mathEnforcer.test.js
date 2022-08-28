const { expect } = require('chai');
const mathEnforcer = require('./4. mathEnforcer');

describe('Math Enforcer Tests', () => {
    describe('addFive Tests', () => {
        it('shoult return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('shoult return correct result', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(5.8)).to.equal(10.8);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-5.8)).to.be.closeTo(-0.8, 0.01);

        });
    });

    describe('subtractTen Tests', () => {
        it('shoult return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('shoult return correct result', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(15.8)).to.be.closeTo(5.8, 0.01);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(-5.5)).to.equal(-15.5);
        });
    });
    
    describe('sum Tests', () => {
        it('shoult return undefined if the parameters are not numbers', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum('5', '5')).to.be.undefined;
        });
        it('shoult return correct result', () => {
            expect(mathEnforcer.sum(5, 6)).to.equal(11);
            expect(mathEnforcer.sum(15.1, 5.1)).to.equal(20.2);
            expect(mathEnforcer.sum(-5.5, -10.3)).to.equal(-15.8);
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });
    });
})
