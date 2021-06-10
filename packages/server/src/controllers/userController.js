const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = {


    async store(req,res){

        const {name,surname,email,password} = req.body;

        saltRounds = 12;

        const user = await User.findOne({email});
        
        if(user) return res.status(409).json({message:'user already exist'});

        const hash = await bcrypt.hash(password, saltRounds)

        try{
            await User.create({ name, surname, email, password:hash } );
        }
        catch(e){

            res.status(400).json({message:'internal error'});

        }

        res.json({message:'user Created'});

    }




}