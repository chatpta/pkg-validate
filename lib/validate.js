const isValidJsonString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;

    try {
        const json = JSON.parse( str );
        return ( typeof json === 'object' );
    } catch ( error ) {
        return false;
    }
};

const isValidIntegerString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^\d+$/g.test( str ) );
}

const isValidUuidString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test( str ) );
}

const isCharactersString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[0-9a-zA-Z ]+$/.test( str ) );
}

const isNameString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[A-Za-z][0-9a-zA-Z-_.'() ]+$/.test( str ) );
}

const isEmailString = email => {
    if ( email === undefined || typeof email !== "string" || email.length === 0 ) return false;
    const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpEmail.test( String( email ).toLowerCase() );
}

const isJwtString = ( jwt ) => {
    if ( jwt === '' || jwt.trim() === '' ) return false;
    const jwtRegex = /^eyJ[a-zA-Z0-9-_.]+$/;
    return jwtRegex.test( jwt );
}

const isPasswordString = password => {
    if ( password === undefined || typeof password !== "string" || password.length === 0 ) return false;
    const regExPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regExPassword.test( String( password ) );
}

const isUsernameString = str => {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^[0-9a-zA-Z]+$/.test( str ) );
}

function isPhoneNumber( str ) {
    if ( str === undefined || typeof str !== "string" || str.length === 0 ) return false;
    return ( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test( str ) );
}

const isUrlSafeString = ( inputString ) => {
    if ( inputString === '' || inputString.trim() === '' ) return false;
    const jwtRegex = /^[a-zA-Z0-9-_.]+$/;
    return jwtRegex.test( inputString );
}

const isPassword6To24CharacterLong = ( password ) => {
    if ( password === undefined || typeof password !== "string" || password.length === 0 ) return false;
    return 6 <= password.length && password.length <= 24;
};

module.exports = {
    isValidJsonString,
    isValidIntegerString,
    isValidUuidString,
    isCharactersString,
    isNameString,
    isEmailString,
    isJwtString,
    isPasswordString,
    isUsernameString,
    isPhoneNumber,
    isUrlSafeString,
    isPassword6To24CharacterLong
};
