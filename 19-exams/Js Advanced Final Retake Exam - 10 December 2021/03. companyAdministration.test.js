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
        it('', () => {

        });
        it('', () => {

        });
        it('', () => {

        });
        it('', () => {

        });


    });

    describe('firedEmployee(employees, index) tests', () => {
        it('', () => {

        });

        it('', () => {

        });
        it('', () => {

        });
        it('', () => {

        });


    });
})