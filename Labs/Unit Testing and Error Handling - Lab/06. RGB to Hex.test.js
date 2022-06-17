const {expect} = require('chai')
const {rgbToHexColor} = require('./06. RGB to Hex')

describe("RGB to Hex tests", () => {
    it("zero tests", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("255 tests", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("returns #AAB4BE for (170, 180, 190)", () => {
        expect(rgbToHexColor(170, 180, 190)).to.equal("#AAB4BE");
    });
    it("pads trailing zeroes, #100101 for (16, 1, 1)", () => {
        expect(rgbToHexColor(16, 1, 1)).to.equal("#100101");
    });
    it('returns undefined if one of the args is not in the range', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
        expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
    });
    it('returns undefined if one of the args it is not an integer', () => {
        expect(rgbToHexColor(0.1, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 0.1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, 0.1)).to.equal(undefined);
    });

    it('returns undefined if one of the args is wrong type', () => {
        expect(rgbToHexColor()).to.equal(undefined);
        expect(rgbToHexColor([], 1, 1)).to.equal(undefined);
        expect(rgbToHexColor({}, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor('1', 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(null, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(true, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(undefined, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(function () { }, 1, 1)).to.equal(undefined);
    });
});