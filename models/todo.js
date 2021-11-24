const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : {
        type : String,
        required :[true ,"title is not empty"],
        maxlength : [30,'title must be than 30 character'],
        minlength : [6, 'title must be less than 6 character'],
    },
    description : {
        type : String,
        required : [true, "description is not empty"],
        maxlength : [30,'description must be than 30 character'],
        minlength : [6, 'description must be less than 6 characters'],
    },
    isComplete : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;