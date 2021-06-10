const jwt = require('jsonwebtoken');

const JWT_SECRET = '05590506505as0d+5ga0+dg10a+d0g+ad87-ga-8d2ga60dg8ad-*1ga5+0dg7*a10d50ga7d*1ga5d0g*-a'

module.exports = {

    generateJWT(id,name,surname,email){
        
        const token = jwt.sign({id,name,surname,email}, JWT_SECRET, { expiresIn: '15m' });
        return token;
        
    },





}