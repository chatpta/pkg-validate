const assert = require( 'assert' ).strict;
const { describe, it } = require( 'mocha' );
const validateProperties = require( '../index' ).validateProperties;


describe( 'ValidateProperties test', function () {

    describe( 'Validate function test', function () {

        it( 'fist_name validate', function ( done ) {
            const testObject = { first_name: "Pankaj" };

            const validatedObject = validateProperties.validateProperties( testObject );

            assert.deepStrictEqual( validatedObject, testObject, 'Validation failed' );
            done();
        } );

        it( 'password validate', function ( done ) {
            const testObject = { password: "secret782*goo" };

            const validatedObject = validateProperties.validateProperties( testObject );

            assert.deepStrictEqual( validatedObject, testObject, 'Validation failed' );
            done();
        } );

        it( 'item_id uuid validate', function ( done ) {
            const testObject = { item_id: "1c76ea46-a212-4cc5-9031-a9a28d927c4c"};

            const validatedObject = validateProperties.validateProperties( testObject );

            assert.deepStrictEqual( validatedObject, testObject, 'Validation failed' );
            done();
        } );
    } );
} );
