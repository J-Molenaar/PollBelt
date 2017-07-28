var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pollSchema = new mongoose.Schema({
    creator:{
        type: String,
        required: true,
        minlength:2
    },
    question:{
        type: String,
        required: true,
        minlength:2
    },
    opt1:{
        type: String,
        required: true,
        minlength:2
    },
    opt1Votes:{
        type: Number,
    },
    opt2:{
        type: String,
        required: true,
        minlength:2
    },
    opt2Votes:{
        type: Number,
    },
    opt3:{
        type: String,
        required: true,
        minlength:2
    },
    opt3Votes:{
        type: Number,
    },
    opt4:{
        type: String,
        required: true,
        minlength:2
    },
    opt4Votes:{
        type: Number,
    },
}, {timestamps:true});

var Poll = mongoose.model("Poll", pollSchema);
