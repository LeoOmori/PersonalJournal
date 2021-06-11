const jwt = require('jsonwebtoken');
const {secret} = require('../config/auth.json');

const JWT_SECRET = secret;

function authorization(req,res,next){

    const headerToken = req.headers['x-access-token'];
    if (!headerToken) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = headerToken.split(' ')[1];
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {

        if(err){
            return res.status(401).json({ message: err });
        }
    
        req.body.id = decoded.id;
        req.body.name = decoded.name;
        req.body.surname = decoded.surname;
        req.body.email = decoded.email;
        next();


    });






}

module.exports = authorization;