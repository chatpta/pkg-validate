const assert = require('assert').strict;
const Validate = require('../lib/validate');


describe('AuthUtil test', function () {
    const goodString = 'I am a good person';
    const badString = 'I <script> am evil </script>';
    const validate = new Validate();

    describe('Validates that value is string containing a-zA-Z1-9 or 0 or -', function () {
        it('validate string', function (done) {
            console.log(badString);
            done();
        });
    });
});