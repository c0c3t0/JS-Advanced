const { expect } = require('chai');
const companyAdministration = require('./03. companyAdministration');

describe('companyAdministration tests', () => {
    describe('hiringEmployee(name, position, yearsExperience) tests', () => {
        it('should throw an error in position is different than "Programmer"', () => {
            expect(() => { companyAdministration.hiringEmployee('', '', 1) }).to.throw(`We are not looking for workers for this position.`);

        });

        it('expect successs if experience is greater than 2', () => {
            expect(companyAdministration.hiringEmployee('pesho', 'Programmer', 3)).to.equal('pesho was successfully hired for the position Programmer.')
        });

        it('expect proper message when experience is less than 3', () => {
            expect(companyAdministration.hiringEmployee('pesho', 'Programmer', 2)).to.equal('pesho is not approved for this position.');
        });

    });

    describe('calculateSalary(hours) tests', () => {
        it('shoud throw an erroe if input is invalid', () => {
            expect(() => companyAdministration.calculateSalary('')).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary('3')).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(-3)).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary({})).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours')
        });

        it('should return correct total amount', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(10.5)).to.equal(157.5);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

    });

    describe('firedEmployee(employees, index) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => { companyAdministration.firedEmployee('', 1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee({}, 1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(undefined, 1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(true, 1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(1, 1) }).to.throw('Invalid input');

            expect(() => { companyAdministration.firedEmployee([], '') }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], []) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], {}) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], undefined) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], true) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], 1.4) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee([], -1) }).to.throw('Invalid input');
            expect(() => { companyAdministration.firedEmployee(['1', '2', '3'], 3) }).to.throw('Invalid input');
        });

        it('should remove an element from given index', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George')
        });

    });
})