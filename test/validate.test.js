const assert = require( 'assert' ).strict;
const { describe, it } = require( 'mocha' );
const validate = require( '../index' ).validate;


describe( 'AuthUtil test', function () {
    const goodString = 'I am a good person';
    const badString = 'I <script>am evil</script>';
    const user = { username: 'username' };

    describe( 'Validate function test', function () {

        it( 'isValidJsonString returns true if json false otherwise', function ( done ) {
            const badString = "1chie87";
            const badStringTwo = "13-34";
            const goodString = "{\"blocks\":[{\"key\":\"ediog\",\"text\":\"I am doing well\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}";

            assert.ok( !validate.isValidJsonString(), 'Undefined string test failed' );
            assert.ok( !validate.isValidJsonString( 3 ), 'Type of string test failed' );
            assert.ok( !validate.isValidJsonString( badString ), 'Bad string test failed' );
            assert.ok( !validate.isValidJsonString( badStringTwo ), 'Bad string test failed' );
            assert.ok( validate.isValidJsonString( goodString ), 'Good string test failed' );
            done();
        } );

        it( 'isValidIntegerString returns true if integer false otherwise', function ( done ) {
            const badString = "1chie87";
            const badStringTwo = "13-34";
            const goodString = "17";

            assert.ok( !validate.isValidIntegerString(), 'Undefined string test failed' );
            assert.ok( !validate.isValidIntegerString( 3 ), 'Type of string test failed' );
            assert.ok( !validate.isValidIntegerString( badString ), 'Bad string test failed' );
            assert.ok( !validate.isValidIntegerString( badStringTwo ), 'Bad string test failed' );
            assert.ok( validate.isValidIntegerString( goodString ), 'Good string test failed' );
            done();
        } );

        it( 'isValidUuidString returns true if uuid false otherwise', function ( done ) {
            const badUuid = "1c76ea46-a212-4cc5-9031-a9a28d927c4c98";
            const goodUuid = "1c76ea46-a212-4cc5-9031-a9a28d927c4c";

            assert.ok( !validate.isValidUuidString(), 'Undefined string test failed' );
            assert.ok( !validate.isValidUuidString( 3 ), 'Type of string test failed' );
            assert.ok( !validate.isValidUuidString( badUuid ), 'Bad string test failed' );
            assert.ok( validate.isValidUuidString( goodUuid ), 'Good string test failed' );
            done();
        } );

        it( 'isCharactersString returns true if input is character false otherwise', function ( done ) {
            assert.ok( !validate.isCharactersString(), 'Undefined string test failed' );
            assert.ok( !validate.isCharactersString( 3 ), 'Type of string test failed' );
            assert.ok( !validate.isCharactersString( badString ), 'Bad string test failed' );
            assert.ok( validate.isCharactersString( goodString ), 'Good string test failed' );
            done();
        } );

        it( 'isNameString returns true if input is character false otherwise', function ( done ) {
            assert.ok( !validate.isNameString( 'Peter @ Singh' ), 'Bad name' );
            assert.ok( !validate.isNameString( '3Peter' ), 'Bad name' );
            assert.ok( validate.isNameString( 'Peter (Singh)' ), 'Good name' );
            assert.ok( validate.isNameString( 'Peter' ), 'Good name' );
            assert.ok( validate.isNameString( 'Peter-Singh' ), 'Peter-Singh' );
            assert.ok( validate.isNameString( 'P. Singh' ), 'Peter-Singh' );
            assert.ok( validate.isNameString( "P's Singh" ), "P's Singh" );
            assert.ok( validate.isNameString( "P's Singh-Lion" ), "P's Singh-Lion" );
            done();
        } );

        it( 'isEmailString returns true if input is email false otherwise ', function ( done ) {
            assert.ok( !validate.isEmailString( goodString ), 'Bad email test failed' );
            assert.ok( !validate.isEmailString( badString ), 'Bad email test failed' );
            assert.ok( !validate.isEmailString( 'peter @gmail.com' ), 'Email validation failed' );
            assert.ok( validate.isEmailString( 'peter@gmail.com' ), 'Email validation failed' );
            done();
        } );

        it( 'isJwtString returns true if input is jwt string false otherwise', function ( done ) {
            const goodJwt = 'eyJhbGciOiJzaGE1MTIiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hluTCWG_JzYEExYOp89Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';
            const badJwt = 'eyJhbGciOiJza<scriptE1MTIiLCJ0eXAiOiJKV/1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hluTCWG_JzYEExYOp89Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';

            assert.ok( !validate.isJwtString( goodString ), 'Bad email test failed' );
            assert.ok( !validate.isJwtString( badString ), 'Bad email test failed' );
            assert.ok( !validate.isJwtString( badJwt ), 'Bad badJwt string test failed' );
            assert.ok( validate.isJwtString( goodJwt ), 'Good JwtString string test failed' );
            done();
        } );

        it( 'isPasswordString returns true if input is password string false otherwise', function ( done ) {
            assert.ok( !validate.isPasswordString( goodString ), 'Bad password test failed' );
            assert.ok( !validate.isPasswordString( badString ), 'Bad password failed' );
            assert.ok( !validate.isPasswordString( 'ha!lsw 3ol&*ler' ), 'Password validation failed' );
            assert.ok( validate.isPasswordString( 'ha!lsw3ol&*ler' ), 'Password validation failed' );
            done();
        } );

        it( 'isUsernameString returns true if input is username string false otherwise', function ( done ) {
            assert.ok( !validate.isUsernameString( goodString ), 'Good string test failed' );
            assert.ok( !validate.isUsernameString( badString ), 'Bad string test failed' );
            assert.ok( validate.isUsernameString( 'testUsername' ), 'username validation failed' );
            assert.ok( validate.isUsernameString( user.username ), 'username validation failed' );
            done();
        } );

        it( 'isPhoneNumber returns true if input is username string false otherwise', function ( done ) {
            assert.ok( validate.isPhoneNumber( "509 644 2443" ), 'Good phone number test failed' );
            assert.ok( !validate.isPhoneNumber( "509 644 2443998" ), 'Bad phone number test failed' );
            done();
        } );

        it( 'isUrlSafeString returns true if input is username string false otherwise', function ( done ) {
            const urlSafeString = 'hbGciOiJzaGE1MTIiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.' +
                '9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hluTCWG_JzYEExYOp89Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';

            const urlUnSafeString = 'hbGciOiJzaGE1MTIiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.' +
                '9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hl=uTCWG_JzYEExYOp8/9Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';

            assert.ok( !validate.isUrlSafeString( urlUnSafeString ), 'Url unsafe test failed' );
            assert.ok( validate.isUrlSafeString( urlSafeString ), 'Url safe test failed' );
            done();
        } );

        it( 'isPasswordLengthCorrect returns true if 6 <= password <= 24', function ( done ) {
            const password = 'hbGciOiJzaGE1MTIiLCJ';

            const badPassword = 'hbGciOiJzaGE1MTIiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.' +
                '9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hl=uTCWG_JzYEExYOp8/9Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';

            assert.ok( validate.isPassword6To24CharacterLong( password ), 'Good password fail' );
            assert.ok( !validate.isPassword6To24CharacterLong( badPassword ), 'Bad password fail' );
            done();
        } );
    } );
} );
