const jwt = require('jsonwebtoken');

module.exports = {

    generateJWT(id,exp,secret){

        const token = jwt.sign({id}, secret, { expiresIn:exp });
        return token;
        
    },

}