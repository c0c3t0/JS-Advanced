const { expect } = require('chai');
const StringBuilder = require('./13. stringBuilder');

describe('String Builder Tests', () => {
    describe('constructor', () => {
        it('should work properly when an empty string is passed', () => {
            const obj = new StringBuilder('');
            expect(obj.toString()).to.equal('');
            expect(obj._stringArray).to.deep.equal([]);
            expect(obj._stringArray.length).to.equal(0);
            expect(typeof obj).to.equal('object');
            expect(obj).to.be.instanceOf(StringBuilder);
        });

        it('should work properly without argument', () => {
            const obj = new StringBuilder();
            expect(obj.toString()).to.equal('');
        });

        it('should return an empty array if undefined is passed', () => {
            const obj = new StringBuilder(undefined);
            expect(obj._stringArray).to.deep.equal([]);
        });

        it('should work properly with valid data', () => {
            const obj = new StringBuilder('some text');
            expect(obj.toString()).to.equal('some text');
            expect(obj._stringArray).to.deep.equal(['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']);
            expect(obj._stringArray.length).to.equal(9);
            expect(typeof obj).to.equal('object');
            expect(obj).to.be.instanceOf(StringBuilder);
        });
    });

    describe('_vrfyParam', () => {
        it('should throw if non-string is passed', () => {
            const err = 'Argument must be a string';
            expect(() => { new StringBuilder([]) }).to.throw(err);
            expect(() => { new StringBuilder(9) }).to.throw(err);
            expect(() => { new StringBuilder({}) }).to.throw(err);
            expect(() => { new StringBuilder(false) }).to.throw(err);
        });
    });

    describe('append(string)', () => {
        it('should throw if a non-string is passed', () => {
            const obj = new StringBuilder('asd');
            const err = 'Argument must be a string';

            expect(() => { obj.append(9) }).to.throw(err);
            expect(() => { obj.append([]) }).to.throw(err);
            expect(() => { obj.append({}) }).to.throw(err);
            expect(() => { obj.append(false) }).to.throw(err);

        });

        it('should append properly', () => {
            const obj = new StringBuilder('asd');
            obj.append('qwe');
            expect(obj.toString()).to.equal('asdqwe');
            obj.append('123');
            expect(obj.toString()).to.equal('asdqwe123');
        });
    });

    describe('prepend(string)', () => {
        it('should throw if a non-string is passed', () => {
            const obj = new StringBuilder('asd');
            const err = 'Argument must be a string';

            expect(() => { obj.prepend(9) }).to.throw(err);
            expect(() => { obj.prepend({}) }).to.throw(err);
            expect(() => { obj.prepend([]) }).to.throw(err);
            expect(() => { obj.prepend(false) }).to.throw(err);

        });

        it('should prepend properly', () => {
            const obj = new StringBuilder('asd');
            obj.prepend('qwe');
            expect(obj.toString()).to.equal('qweasd');
            obj.prepend('123');
            expect(obj.toString()).to.equal('123qweasd');
        });
    });

    describe('insertAt(string, startIndex)', () => {
        it('should throw if a non-string is passed', () => {
            const obj = new StringBuilder('asd');
            const err = 'Argument must be a string';

            expect(() => { obj.insertAt(9, 1) }).to.throw(err);
            expect(() => { obj.insertAt({}, 1) }).to.throw(err);
            expect(() => { obj.insertAt([], 1) }).to.throw(err);
            expect(() => { obj.insertAt(false, 1) }).to.throw(err);
        });

        it('should properly insert string to the given index', () => {
            const obj = new StringBuilder('asd');
            obj.insertAt('qwe', 1);
            expect(obj.toString()).to.equal('aqwesd');
        });
    });

    describe('remove(startIndex, length)', () => {
        it('should remove properly from the given index to the given length', () => {
            const obj = new StringBuilder('012qwe6');
            obj.remove(3, 2);
            expect(obj.toString()).to.equal('012e6');
            obj.remove(0, 3);
            expect(obj.toString()).to.equal('e6');
        });
    });

    describe('tetss the whole functionality', () => {
        it('should append, prepend, append at given index and remove', () => {
            const obj = new StringBuilder('asd');
            obj.append('erty');
            obj.prepend('qw');
            obj.insertAt('123', 2);
            obj.remove(5, 3);
            expect(obj.toString()).to.equal('qw123erty');
        });
    });
});