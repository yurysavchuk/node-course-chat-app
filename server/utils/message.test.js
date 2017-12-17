var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Mike';
        var text = 'Hi for everyone';
        var result = generateMessage(from, text);
        expect(result).toInclude({from, text});
        expect(result.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Jane';
        var latitude = '13';
        var longitude = '76';

        var message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}` 
        });
    });
});