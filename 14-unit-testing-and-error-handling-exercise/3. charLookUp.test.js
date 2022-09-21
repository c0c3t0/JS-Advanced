
const { expect} = require('chai');
const lookupChar = require('./3. charLookUp.js');

describe('Char Lookup Tests', () => {
    it('should takes valid inputs', () => {
        expect(typeof '',).to.equals('string');
        expect(typeof 3).to.equals('number');
    });

    it('should return undefined if inputs are invalid', () => {
        expect(lookupChar(3, 'string')).to.be.undefined;
        expect(lookupChar(['d'], 2)).to.be.undefined;
        expect(lookupChar({}, 'string')).to.be.undefined;
        expect(lookupChar('', 4.4)).to.be.undefined;
    });

    it('should return incorrect index if index is negative or index is equal or bigger than string length', () => {
        expect(lookupChar('bigger index', 33)).to.equal('Incorrect index');
        expect(lookupChar('equals', 6)).to.equal('Incorrect index');
        expect(lookupChar('negative index', -9)).to.equal('Incorrect index');
    });

    it('should return char at given index if data is valid', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 1)).to.equal('t');
        expect(lookupChar('string', 2)).to.equal('r');
        expect(lookupChar('string', 3)).to.equal('i');
        expect(lookupChar('string', 4)).to.equal('n');
        expect(lookupChar('string', 5)).to.equal('g');
    });
})