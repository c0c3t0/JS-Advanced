const {expect} = require('chai');
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
})