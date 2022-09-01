const { expect } = require('chai');
const StringBuilder = require('./13. stringBuilder');

describe('String Builder Tests', () => {
    // describe('constructor', () => {
    //     it('should work properly when an empty string is passed', () => {
    //         const obj = new StringBuilder('');
    //         expect(obj.toString()).to.equal('');
    //     });

    //     it('should work properly without argument', () => {
    //         const obj = new StringBuilder();
    //         expect(obj.toString()).to.equal('');
    //     });

    //     it('should return an empty array if undefined is passed', () => {
    //         const obj = new StringBuilder(undefined);
    //         expect(obj._stringArray).to.deep.equal([]);
    //     });
    // });

    // describe('_vrfyParam', () => {
    //     it('should throw if non-string is passed', () => {
    //         const err = 'Argument must be a string';
    //         expect(() => { new StringBuilder([]) }).to.throw(err);
    //         expect(() => { new StringBuilder(9) }).to.throw(err);
    //         expect(() => { new StringBuilder({}) }).to.throw(err);
    //     });
    // });

    describe('append(string)', () => {
        it('should throw if non-string is passed', () => {
            const obj = new StringBuilder('asd');
            const err = 'Argument must be a string';

            expect(() => { obj.append(9) }).to.throw(err);
            expect(() => { obj.append([]) }).to.throw(err);
            expect(() => { obj.append({}) }).to.throw(err);
        });

        it('should append properly the array', () => {
            const obj = new StringBuilder('asd');
            obj.append('qwe');
            expect(obj.toString()).to.equal('asdqwe');
            obj.append('123');
            expect(obj.toString()).to.equal('asdqwe123');
        })
    })
});