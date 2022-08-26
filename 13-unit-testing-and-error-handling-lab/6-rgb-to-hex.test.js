const { expect } = require('chai');
const rgbToHexColor = require('./6-rgb-to-hex');

describe('RGB to Hex Color Tests', () => {
    it('return undefined if inputs are not numbers', () => {
        expect(rgbToHexColor(1, 'gosho', '3')).to.be.undefined;
        expect(rgbToHexColor([1], 1, 3)).to.be.undefined;
        expect(rgbToHexColor(1, 8.1, 3)).to.be.undefined;
    });

    it('should return undefined if input numbers are out of range', () => {
        expect(rgbToHexColor(-2, 55, 180)).to.be.undefined;
        expect(rgbToHexColor(2, -55, 180)).to.be.undefined;
        expect(rgbToHexColor(2, 55, -180)).to.be.undefined;

        expect(rgbToHexColor(0, 55, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 55)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 55)).to.be.undefined;
    });

    it('should return correct hex if input is valid', () => {
        expect(rgbToHexColor(11, 55, 66)).to.be.equal('#0B3742');
        expect(rgbToHexColor(11, 0, 255)).to.be.equal('#0B00FF');
        
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });
}) 