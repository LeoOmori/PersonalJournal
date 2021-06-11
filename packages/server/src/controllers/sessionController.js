const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Token = require('../models/tokenModel');
const ObjectId = require('mongoose').Types.ObjectId; 
const {generateJWT} = require('../../utils/sessionUtils');
const {secret, refreshSecret} = require('../../config/auth.json');


module.exports = {

    async login(req,res){

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(!user) return res.status(403).json({message:"user not found"});

        const isCompatible = await bcrypt.compare(password, user.password);

        if(!isCompatible) return res.status(403).json({message:"wrong password"});

        const jwtToken = generateJWT(user._id, '15m', secret);
        const refreshToken = generateJWT(user._id, '999y', refreshSecret);


        await Token.create({userId:user._id,refreshToken});

 
        return res.json({toke:jwtToken, refreshToken , auth:true});

    },

    async refresh(req,res){

        const {refreshToken} = req.body;
        if(!refreshToken) return res.status(401).json({message:'no refresh token provided'});
        

        decoded = jwt.verify(refreshToken,refreshSecret,async (err,decoded) => {

            if(err){
                return res.status(401).json({ message: err });
            }

            const TokenDb = await Token.findOne({refreshToken});
    
            if(!TokenDb){ 

                await Token.deleteMany({userId:ObjectId(decoded.id)});
                return res.status(401).json({message:'Invalid Token'});

            }
    
            const jwtToken = generateJWT(decoded.id, '15m', secret);
            const newRefreshToken  = generateJWT(decoded.id, '999y', refreshSecret);
    
            await Token.findOneAndUpdate(
                {refreshToken},
                {refreshToken:newRefreshToken},
                {useFindAndModify:false}
            );

            return res.json({token:jwtToken, refreshToken:newRefreshToken});

        });
        
    }

}