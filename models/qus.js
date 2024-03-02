const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const qusSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    profession:String,
    msg:{
        type:String,
        required:true
    }

});

const Qus = mongoose.model("Qus",qusSchema);


module.exports = Qus;