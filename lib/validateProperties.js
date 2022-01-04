// Validate each of the properties values are in correct format.
const {
    isCharactersString,
    isPassword6To24CharacterLong,
    isEmailString,
    isPhoneNumber,
    isUrlSafeString,
    isPasswordString,
    isValidUuidString
} = require( "./validate" );

function validateProperties( obj ) {
    let returnObj = {};

    for ( let [ key, value ] of Object.entries( obj || {} ) ) {

        switch ( key ) {
            case "first_name" :
            case "username" :
                isCharactersString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "password" :
            case "new_password" :
                isPassword6To24CharacterLong( value ) && isPasswordString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "email" :
                isEmailString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "phone_number":
                isPhoneNumber( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "token":
            case "email_confirm_token":
            case "verification_token":
                isUrlSafeString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "uuid":
            case "item_id":
            case "user_id":
                isValidUuidString( value ) ?
                    returnObj[ key ] = value : null;
                break;
        }
    }

    return returnObj;
}

module.exports = {
    validateProperties
};
