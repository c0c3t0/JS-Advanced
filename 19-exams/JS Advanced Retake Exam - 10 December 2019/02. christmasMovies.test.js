const { expect } = require('chai');
const ChristmasMovies = require('./02. christmasMovies');

describe("Christmas Movies Tests", () => {
    describe('constructor() tests', () => {
        it('tests constructor', () => {
            let obj = new ChristmasMovies();

            expect(obj).instanceof(ChristmasMovies);
            expect(typeof obj).to.equal('object');
            expect(obj.movieCollection).to.deep.equal([]);
            expect(obj.watched).to.deep.equal({});
            expect(obj.actors).to.deep.equal([]);
        });
    })

    describe("buyMovie(movieName, actors) tests", () => {
        it('should add a movie to the collection', () => {
            let obj = new ChristmasMovies();

            expect(obj.buyMovie('film', ['pesho', 'gosho'])).to
                .equal(`You just got film to your collection in which pesho, gosho are taking part!`);
        });

        it('should add a movie and remove duplicates in actors', () => {
            let obj = new ChristmasMovies();

            expect(obj.buyMovie('movie 2', ['pesho', 'gosho', 'gosho'])).to
                .equal(`You just got movie 2 to your collection in which pesho, gosho are taking part!`);
            expect(obj.movieCollection).to.deep.equal([{ name: 'movie 2', actors: ['pesho', 'gosho'] }])
        });

        it('should throw if a movie is already in the collection', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film' });

            expect(() => { obj.buyMovie('film', ['pesho', 'gosho']) }).to.throw(`You already own film in your collection!`);
        });
    });

    describe('discardMovie(movieName) tests', () => {
        it('should work properly', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film' });
            obj.watchMovie('film');

            expect(obj.discardMovie('film')).to.equal('You just threw away film!')
            expect(obj.movieCollection).to.deep.equal([]);
            expect(obj.watched).to.deep.equal({});
        });

        it('should throw if movie not in collection', () => {
            let obj = new ChristmasMovies();

            expect(() => { obj.discardMovie('nqma film') }).to.throw('nqma film is not at your collection!')
        });

        it('should throw if movie not in watched', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film' });

            expect(() => { obj.discardMovie('film') }).to.throw('film is not watched!')
        });
    });

    describe('watchMovie(movieName) tests', () => {
        it('should add the movie in watched list and add a watch', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film' });
            obj.watchMovie('film');

            expect(obj.watched['film']).to.equal(1);
        });

        it('should add a new watch if movie is already in the watched list', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film' });
            obj.watchMovie('film');
            obj.watchMovie('film');

            expect(obj.watched['film']).to.equal(2);
        });

        it('should throw if no such movie in the collection', () => {
            let obj = new ChristmasMovies();

            expect(() => { obj.watchMovie('film') }).to.throw('No such movie in your collection!');
        });
    });

    describe('favouriteMovie() tests', () => {
        it('should throw an error if no favourite movie', () => {
            let obj = new ChristmasMovies();

            expect(() => { obj.favouriteMovie() }).to.throw('You have not watched a movie yet this year!');
        });

        it('should return proper string about favourite movie', () => {
            let obj = new ChristmasMovies();
            obj.buyMovie('film');
            obj.watchMovie('film');
            obj.watchMovie('film');

            obj.buyMovie('film 2');
            obj.watchMovie('film 2');

            expect(obj.favouriteMovie()).to.equal('Your favourite movie is film and you have watched it 2 times!');
        });
    });

    describe('mostStarredActor() tests', () => {
        it('should throw if there are no movies in the collection', () => {
            let obj = new ChristmasMovies();

            expect(() => { obj.mostStarredActor() }).to.throw('You have not watched a movie yet this year!');
        });

        it('should return a message in a proper format', () => {
            let obj = new ChristmasMovies();
            obj.movieCollection.push({ name: 'film', actors: ['pesho', 'gosho'] });
            obj.movieCollection.push({ name: 'film 2', actors: ['pesho', 'tosho'] });
            obj.movieCollection.push({ name: 'film 3', actors: ['pesho', 'mimi'] });

            expect(obj.mostStarredActor()).to.equal('The most starred actor is pesho and starred in 3 movies!');
        });
    });
});