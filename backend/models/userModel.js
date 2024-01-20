const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    image : {
        public_id : String,
        url : String 
    }
});

const user = mongoose.model('user',userSchema);
module.exports = user;