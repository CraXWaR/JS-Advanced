const { expect } = require("chai");

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('tests', () => {
    it('check whether first param type is valid', () => {
        expect(lookupChar(0, 0)).to.be.equal(undefined)
    })
    it('check whether second param type is valid', () => {
        expect(lookupChar('hello', 'test')).to.be.equal(undefined)
    })
    it('check whether second param is type integer', () => {
        expect(lookupChar('hello', 0.1)).to.be.equal(undefined)
    })
    it('check value with index bigger than string length', () => {
        expect(lookupChar('hello', 10)).to.be.equal('Incorrect index')
    })
    it('check value with negative index', () => {
        expect(lookupChar('hello', -10)).to.be.equal('Incorrect index')
    })
    it('check value with valid params', () => {
        expect(lookupChar('hello', 1)).to.be.equal('e')
    })
})