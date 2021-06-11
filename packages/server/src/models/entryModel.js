const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = new Schema({

    title:String,
    content: String,
    date: Date,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },
    
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;