// Validate each of the properties values are in correct format.
const {
    isEmailString,
    isPhoneNumber,
    isUrlSafeString,
    isValidUuidString,
    isSimplePasswordString,
    isPasswordString,
    isString6To16CharacterLong,
    isNameString,
    isCharactersString,
    isValidIntegerString,
    isValidJsonString, isImageUrl
} = require( "./validate" );

function validateProperties( obj ) {
    let returnObj = {};

    for ( let [ key, value ] of Object.entries( obj || {} ) ) {

        switch ( key ) {
            case "first_name" :
            case "username" :
            case "newStatus":
            case "description":
            case "comment":
            case "status":
            case "name":
            case "title" :
            case "brand":
            case "short_description" :
                isNameString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "password" :
            case "new_password" :
                isString6To16CharacterLong( value ) && isSimplePasswordString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "strong_password" :
                isString6To16CharacterLong( value ) && isPasswordString( value ) ?
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
            case "image_id":
            case "itemId":
            case "userId":
            case "orderId":
            case "category_id":
            case "parent_id":
                isValidUuidString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "period":
                isCharactersString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "offset_number":
            case "number_of_orders":
                isValidIntegerString( value ) ?
                    returnObj[ key ] = value : null;
                break;
            case "about":
                isValidJsonString( value ) ? returnObj[ key ] = value.trim() : null;
                break;
            case "weight":
            case "dimensions":
                isValidJsonString( JSON.stringify( value ) ) ? returnObj[ key ] = value : null;
                break;
            case "image_url":
                isImageUrl( value ) ? returnObj[ key ] = value : null;
                break;
        }
    }

    return returnObj;
}

module.exports = {
    validateProperties
};
