const { expect } = require('chai');
const rentCar = require('./03. rentCar');

describe('rentCar Tests', () => {
    describe('searchCar(shop, model) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => {rentCar.searchCar('', [])}).to.throw('Invalid input!');
            expect(() => {rentCar.searchCar(3, [])}).to.throw('Invalid input!');
            expect(() => {rentCar.searchCar('', {})}).to.throw('Invalid input!');
            expect(() => {rentCar.searchCar(true, {})}).to.throw('Invalid input!');
            expect(() => {rentCar.searchCar([], undefined)}).to.throw('Invalid input!');
        });

        it('should return proper message if the model is in the shop', () => {
            let shop = ["Volkswagen", "BMW", "Audi", "BMW"];
            expect(rentCar.searchCar(shop, 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
            expect(rentCar.searchCar(shop, 'BMW')).to.equal('There is 2 car of model BMW in the catalog!');
        });

        it('should throw an error message if the model is not in the shop', () => {
            let shop = ["Volkswagen", "BMW", "Audi", "BMW"];
            expect(() => {rentCar.searchCar(shop, 'Lada')}).to.throw('There are no such models in the catalog!');
            expect(() => {rentCar.searchCar(shop, '')}).to.throw('There are no such models in the catalog!');
        });
    });

    describe('calculatePriceOfCar(model, days) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => {rentCar.calculatePriceOfCar('', '3')}).to.throw('Invalid input!');
            expect(() => {rentCar.calculatePriceOfCar(3, [])}).to.throw('Invalid input!');
            expect(() => {rentCar.calculatePriceOfCar('', {})}).to.throw('Invalid input!');
            expect(() => {rentCar.calculatePriceOfCar(true, {})}).to.throw('Invalid input!');
            expect(() => {rentCar.calculatePriceOfCar([], undefined)}).to.throw('Invalid input!');
        });

        it('should return proper message when car is rented', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal(('You choose Audi and it will cost $360!'));
            expect(rentCar.calculatePriceOfCar('Mercedes', 10)).to.equal(('You choose Mercedes and it will cost $500!'));
        });

        it('should throw an error message when car is not in the catalogue', () => {
            expect(() => {rentCar.calculatePriceOfCar('Lada', 6)}).to.throw('No such model in the catalog!');
            expect(() => {rentCar.calculatePriceOfCar('', 6)}).to.throw('No such model in the catalog!');
            
        });
    });

    describe('checkBudget(costPerDay, days, budget) tests', () => {
        it('should', () => {

        });
    });
})