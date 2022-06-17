const { expect } = require("chai");

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('is odd or even tests', () => {
    it('should be undefiend if num', () => {
        expect(isOddOrEven(2)).to.be.undefined
    })
    it('should be undefiend if arr', () => {
        expect(isOddOrEven([])).to.be.undefined
    })
    it('should be undefiend if obj', () => {
        expect(isOddOrEven({})).to.be.undefined
    })
    it('should return odd if string is odd', () => {
        expect(isOddOrEven('yo!')).to.be.equal('odd')
    })
    it('should return even if string is even', () => {
        expect(isOddOrEven('hi')).to.be.equal('even')
    })
}) 