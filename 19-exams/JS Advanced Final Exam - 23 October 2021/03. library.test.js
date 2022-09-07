const { expect } = require('chai');
const library = require('./03. library');

describe('library tests', () => {
    describe('calcPriceOfBook(nameOfBook, year) tests', () => {
        it('should throw an error if input is invalid', () => {
            expect(() => { library.calcPriceOfBook('', 3.3) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', -3.3) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', '') }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', []) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', {}) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', undefined) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('', true) }).to.throw('Invalid input');

            expect(() => { library.calcPriceOfBook(1, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook([], 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook({}, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(undefined, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(true, 2022) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(1.1, 2022) }).to.throw('Invalid input');
        });

        it('expect 50% discount of book', () => {
            expect(library.calcPriceOfBook('book', 1900)).to.equal('Price of book is 10.00')
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00')

        });

        it('expect of book to be 20BGN', () => {
            expect(library.calcPriceOfBook('book', 2000)).to.equal('Price of book is 20.00')
            expect(library.calcPriceOfBook('book', 1981)).to.equal('Price of book is 20.00')

        });
    });

    describe('findBook: function(booksArr, desiredBook)', () => {
        it('should throw an error if booksArr is empty', () => {
            expect(() => { library.findBook([], '') }).to.throw('No books currently available');
            expect(() => { library.findBook([], 'book') }).to.throw('No books currently available');
        });

        it('should return a proper message if book is not in the library', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'book')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'torronto')).to.equal('The book you are looking for is not here!');

        });

        it('should return a proper message if book is in the library', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal('We found the book you want.');

        });
    });

    describe('arrangeTheBooks(countBooks)', () => {
        it('', () => {

        });
    });

})