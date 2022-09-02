const { expect } = require('chai');
const carService = require('./03. Car Service_Resources');

describe('Car Service Tests', () => {
    describe('isItExpensive(issue)', () => {
        it('if issue is engine or transmission should return "The issue with the car is more severe and it will cost more money"', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it('if issue is different should return "The overall price will be a bit cheaper"', () => {
            expect(carService.isItExpensive('Lights')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('descount(numberOfParts, totalPrice', () => {
        it('should throw if input is invalid', () => {
            expect(() => { carService.discount('', []) }).to.throw("Invalid input");
            expect(() => { carService.discount('', 3) }).to.throw("Invalid input");
            expect(() => { carService.discount(3, []) }).to.throw("Invalid input");
            expect(() => { carService.discount('3', '3') }).to.throw("Invalid input");
        });

        it('should return "You cannot apply a discount" if numberOfParts is less or equal to 2', () => {
            expect(carService.discount(1, 1)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 1)).to.equal("You cannot apply a discount");
        });

        it('discount should be 15% if numberOfParts is between 3 and 7 inclusive', () => {
            expect(carService.discount(3, 50)).to.equal(`Discount applied! You saved 7.5$`);
            expect(carService.discount(7, 50)).to.equal(`Discount applied! You saved 7.5$`);
        });

        it('discount should be 30% if numberOfParts is higher than 7', () => {
            expect(carService.discount(8, 50)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(20, 50)).to.equal(`Discount applied! You saved 15$`);
        });
    });

    describe('partsToBuy(partsCatalog, neededParts', () => {
        it('should throw if input is invalid', () => {
            expect(() => { carService.partsToBuy('', []) }).to.throw("Invalid input");
            expect(() => { carService.partsToBuy('', 3) }).to.throw("Invalid input");
            expect(() => { carService.partsToBuy(3, []) }).to.throw("Invalid input");
            expect(() => { carService.partsToBuy('3', '3') }).to.throw("Invalid input");
        });

        it('should return 0 if partsCatalog is empty', () => {
            expect(carService.partsToBuy([], [])).to.equal(0);
        });

        it('should return properly', () => {
            let catalogue = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let needed = ["blowoff valve"];
            expect(carService.partsToBuy(catalogue, needed)).to.equal(145)
        })
    })

})