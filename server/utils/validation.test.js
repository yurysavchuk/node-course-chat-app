const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString validation function', () => {
    it('shoud reject non-string value', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with spaces', () => {
        var res = isRealString('   ');
        expect(res).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        var res = isRealString(' Yuty   ');
        expect(res).toBe(true);
    });
});