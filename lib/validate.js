class Validate {

    isStringOfCharacters(str) {
        if (str === undefined || typeof str !== "string" || str.length === 0) return false;
        return (/^[0-9a-zA-Z ]+$/.test(str));
    }

    isStringOfUsername(str) {
        if (str === undefined || typeof str !== "string" || str.length === 0) return false;
        return (/^[0-9a-zA-Z]+$/.test(str));
    }

    isEmail(email){
        if (email === undefined || typeof email !== "string" || email.length === 0) return false;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    isStringOfPassword(password) {
        if (password === undefined || typeof password !== "string" || password.length === 0) return false;
        const regExPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return regExPassword.test(String(password));
    }

}

module.exports = Validate;
