const { expect } = require('chai');
const dealership = require('./03. dealership');

describe('dealership Tests', () => {
    describe('newCarCost(oldCarModel, newCarPrice) tests', () => {
        it('should return proper final price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.equal(0);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 20000)).to.equal(6000);
        });

        it('should return proper price if the oldCarModel not in discountForOldCar', () => {
            expect(dealership.newCarCost('Suzuki Jimney', 20000)).to.equal(20000);
            expect(dealership.newCarCost('Mercedess G-class', 20000)).to.equal(20000);
            expect(dealership.newCarCost('BMW M6', 30000)).to.equal(30000);
            expect(dealership.newCarCost('Tesla', 20000)).to.equal(20000);
        });
    });

    describe('carEquipment(extrasArr, indexArr) tests', () => {
        it('should return array of extras', () => {
            expect(dealership.carEquipment([
                'air-conditional',
                'parktronic',
                'air-bag',
                'cruise-control',
                'memory seats'],
                 [1, 3])).to.deep.equal(['parktronic', 'cruise-control']);
        });
    });

    describe('euroCategory(category) tests', () => {
        it('should return proper message if category is less than 4', () => {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('should return proper message if category is more than or equal to 4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
})