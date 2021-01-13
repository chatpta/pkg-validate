const assert = require('assert').strict;
const Validate = require('../index');


describe('AuthUtil test', function () {
    const goodString = 'I am a good person';
    const badString = 'I <script> am evil </script>';
    const user = {username: 'username'};
    const validate = new Validate();

    describe('Validates that value is string containing a-zA-Z1-9 or 0 or -', function () {
        it('validate isStringOfCharacters', function (done) {
            assert.ok(!validate.isStringOfCharacters(), 'Undefined string test failed');
            assert.ok(!validate.isStringOfCharacters(3), 'Type of string test failed');
            assert.ok(validate.isStringOfCharacters(goodString), 'Good string test failed');
            assert.ok(!validate.isStringOfCharacters(badString), 'Bad string test failed');
            done();
        });

        it('validate isStringOfUsername', function (done) {
            assert.ok(!validate.isStringOfUsername(goodString), 'Good string test failed');
            assert.ok(!validate.isStringOfCharacters(badString), 'Bad string test failed');
            assert.ok(validate.isStringOfUsername('specialusername'), 'username validation failed');
            assert.ok(validate.isStringOfUsername(user.username), 'username validation failed');
            done();
        });

        it('validate isEmail', function (done) {
            assert.ok(!validate.isEmail(goodString), 'Bad email test failed');
            assert.ok(!validate.isEmail(badString), 'Bad email test failed');
            assert.ok(validate.isEmail('peter@gmail.com'), 'Email validation failed');
            assert.ok(!validate.isEmail('peter @gmail.com'), 'Email validation failed');
            done();
        });
    });
});