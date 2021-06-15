
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function validate(values){

    let errors = {};

    validateEmail(values.email)

    if(!values.name || !values.surName){
        errors.name = "First name and last name required"
    }

    if(!values.email){
        errors.email = "E-mail required";
    }else if(!validateEmail(values.email)){
        errors.email = "E-mail not valid"
    }

    if(!values.password){
        errors.password = "password required"
    }else if(values.password.length < 8){
        errors.password = "password needs to be 8 characters or more"
    }

    if(!values.checkPassword){
        errors.checkPassword = "password check required"
    }else if(values.checkPassword !== values.password){
        errors.passwordCheck = "password and password check needs to be the same"
    }


    return errors;

}