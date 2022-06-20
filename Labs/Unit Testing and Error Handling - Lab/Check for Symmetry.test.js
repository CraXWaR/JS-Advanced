const {expect} = require('chai')
const {isSymmetric} = require('./05. Check for Symmetry')

describe('Tests isSymmetric:', () => {
    it('returns false with wrong argument type', () => {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric('1')).to.be.false;
        expect(isSymmetric({})).to.be.false;
    });
    it('returns true with empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('returns true if array is with Function and Null', () => {
        expect(isSymmetric([function () { }, null])).to.be.true;
    });
    it('returns true if array is symmetrical', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('returns false if array is Not symmetrical', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });

    it('returns true if array is mixed and symmetrical', () => {
        expect(isSymmetric(['1', 1, '1'])).to.be.true;
    });
});