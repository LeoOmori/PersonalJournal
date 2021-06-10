const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    
    name:String,
    surname:String,
    email:{
        type:String,
        unique:true,
        
    },
    password:String,
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;