const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      UserId : String,
      firstName : {
          type : String,
          maxlength : [true, "must be less than 6 characters" ],
          minlength : [true,"must be than 4 character"] 
      },
      lastName : {
        type : String,
        maxlength : [true, "must be less than 6 characters" ],
        minlength : [true,"must be than 3 character"] 
    },
      age : Number

})
module.exports = userSchema;