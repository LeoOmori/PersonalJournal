const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const {generateJWT} = require('../../utils/sessionUtils');

module.exports = {

    async login(req,res){

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(!user) return res.status(403).json({message:"user not found"});

        const isCompatible = await  bcrypt.compare(password, user.password);

        if(!isCompatible) return res.status(403).json({message:"wrong password"});

        const jwtToken = generateJWT(user._id, user.name, user.surname, user.email);

        return res.json({toke:jwtToken, auth:true});



        



    }



}