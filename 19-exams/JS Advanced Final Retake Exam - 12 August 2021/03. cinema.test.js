const { expect } = require('chai');
const cinema = require('./03. cinema');

describe('cinema Tests', () => {
    describe('showMovies(movieArr) tests', () => {
        it('should return proper message when length of array is zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('should return list of movies', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });

    });

    describe('ticketPrice(projectionType) tests', () => {
        it('should throw if projection type is not in the schedule', () => {
            expect(() => { cinema.ticketPrice('kkk') }).to.throw('Invalid projection type.');
        });

        it('should return price if projection type is in the schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });

    describe('swapSeatsInHall(firstPlace, secondPlace) tests', () => {
        it('should return proper message if input is invalid', () => {
            expect(cinema.swapSeatsInHall(3, '3')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, -3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 2.1)).to.equal('Unsuccessful change of seats in the hall.');

            expect(cinema.swapSeatsInHall('3', 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-3, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.1, 3)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('should return proper message if input is valid', () => {
            expect(cinema.swapSeatsInHall(3, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 20)).to.equal('Successful change of seats in the hall.');

        });
    });
})