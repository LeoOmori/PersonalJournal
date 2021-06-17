
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function registerValidate(values){

    let errorsList = {};
    let isValid = true;

    if(!values.name || !values.surName){
        errorsList.name = "First name and last name required"
        isValid = false;
    }

    if(!values.email){
        errorsList.email = "E-mail required";
        isValid = false;
    }else if(!validateEmail(values.email)){
        errorsList.email = "E-mail not valid";
        isValid = false;
    }

    if(!values.password){
        errorsList.password = "password required";
        isValid = false;
    }else if(values.password.length < 8){
        errorsList.password = "password needs to be 8 characters or more";
        isValid = false;
    }

    if(!values.checkPassword){
        errorsList.checkPassword = "password check required";
        isValid = false;
    }else if(values.checkPassword !== values.password){
        errorsList.passwordCheck = "password and password check needs to be the same"
        isValid = false;
    }

    return { errorsList , isValid };

}

function loginValidate(values){

    let errorsList = {};
    let isValid = true;

    if(!values.email && !values.password){
        errorsList.emptyInput = "All the input must be filled";
        isValid= false;
    }else if(!validateEmail(values.email)){
        errorsList.email = "E-mail not valid";
        isValid = false;
    }

    return { errorsList , isValid };

}


export {registerValidate, loginValidate}