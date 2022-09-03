const { expect } = require('chai');
const bookSelection = require('./03. bookSelection');

describe('bookSelection Tests', () => {
    describe('isGenreSuitable(genre, age) tests', () => {
        it('if genre is Thriller or Horror and age under 13 should throw', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
        it('if genre is Thriller or Horror and age above 13 should throw', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 12)).to.equal('Those books are suitable');
        });
    });

    describe('isItAffordable(price, budget)) tests', () => {
        it('should throw if input is invalid', () => {
            expect(() => { bookSelection.isItAffordable('', '') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('4', '4') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('', []) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('', {}) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('', true) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('', undefined) }).to.throw('Invalid input');
        });

        it('should return properly if price is highter than budget', () => {
            expect(bookSelection.isItAffordable(100, 0)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(100, 99)).to.equal("You don't have enough money");
        });

        it('should return properly if budget is highter than price', () => {
            expect(bookSelection.isItAffordable(100, 100)).to.equal('Book bought. You have 0$ left');
        });
    });

    describe('suitableTitles(books, wantedGenre tests)', () => {
        it('should throw if input is invalid', () => {
            expect(() => { bookSelection.suitableTitles(4, '') }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles('4', '4') }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles('', []) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles('', {}) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles('', true) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles('', undefined) }).to.throw('Invalid input');
        });

        it('should return properly if budget is highter than price', () => {
            let arr = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code 2", genre: "Thriller" },
                { title: "IT", genre: "Horror" },
                { title: "IT 2", genre: "Horror" },
                { title: "The Da Vinci Code 3", genre: "Thriller" }];

            let wanted = 'Horror'
            let wanted2 = 'Comedy'
            expect(bookSelection.suitableTitles(arr, wanted)).to.deep.equal(['IT', 'IT 2']);
            expect(bookSelection.suitableTitles(arr, wanted2)).to.deep.equal([]);
        });

    });
})