const { expect } = require('chai');
const createCalculator = require('./7-add-or-subtract');

describe('Add/Subtract Tests', () => {
    it('should return an object', () => {
        expect(typeof createCalculator()).to.equal('object');
    });

    it('should return an object with functions as properties', () => {
        let obj = createCalculator();
        expect(obj).haveOwnProperty('add');
        expect(obj).haveOwnProperty('subtract');
        expect(obj).haveOwnProperty('get');
    });

    it('internal sum cannot be modified', () => {
        expect(createCalculator().value).to.equal(undefined);
    });

    it('add method should add a number to internal sum', () => {
        let calc = createCalculator();
        calc.add(3);
        expect(calc.get()).to.equal(3);
        calc.add('3');
        expect(calc.get()).to.equal(6);
    });

    it('subtract method should substracted from the internal sum', () => {
        let calc = createCalculator();
        calc.add(9);
        calc.subtract(1);
        expect(calc.get()).to.equal(8);
        calc.subtract('4');
        expect(calc.get()).to.equal(4);
    })


})