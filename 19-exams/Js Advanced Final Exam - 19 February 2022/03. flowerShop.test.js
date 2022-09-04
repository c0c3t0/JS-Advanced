const { expect } = require('chai');
const flowerShop = require('./03. flowerShop');

describe('flowerShop Tests', () => {
    describe('calcPriceOfFlowers(flower, price, quantity) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, '') }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, []) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, {}) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, 3.3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, true) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers('', 3, undefined) }).to.throw("Invalid input!");

            expect(() => { flowerShop.calcPriceOfFlowers(3, '', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers([], '', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers({}, '', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers(3.3, '', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers(true, '', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.calcPriceOfFlowers(undefined, '', 3) }).to.throw("Invalid input!");

        });

        it('should return multiplies price and quantity', () => {
            expect(flowerShop.calcPriceOfFlowers('tulip', 5, 6)).to.equal('You need $30.00 to buy tulip!');
        });

    });

    describe('checkFlowersAvailable(flower, gardenArr) tests', () => {
        it('test when no flowers', () => {
            expect(flowerShop.checkFlowersAvailable('tulip', ["Rose", "Lily", "Orchid"])).to.equal('The tulip are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('', [])).to.equal('The  are sold! You need to purchase more!');
        });

        it('test if there is such flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!');
        });

    })

    describe('sellFlowers(gardenArr, space) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => { flowerShop.sellFlowers(3, 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers('', 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers({}, 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers(true, 3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers(undefined, 3) }).to.throw("Invalid input!");

            expect(() => { flowerShop.sellFlowers([], '') }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers([], {}) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers([], []) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers([], true) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers([], undefined) }).to.throw("Invalid input!");

            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -3) }).to.throw("Invalid input!");
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3) }).to.throw("Invalid input!");


        });

        it('should remove flower from array properly ', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

    })
})