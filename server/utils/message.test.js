var {generateMessage} = require('./message');
var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Mike';
        var text = 'Hi for everyone';
        var result = generateMessage(from, text);
        expect(result).toInclude({from, text});
        expect(result.createdAt).toBeA('number');
    });
});