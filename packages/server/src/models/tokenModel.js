const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenSchema = new Schema({

    refreshToken:String,
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;