const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:String,
    description:String,
    img:String,
    technologies:[
        {
            type:String
        }
    ],
    link:String
});

const Project = mongoose.model("Project" , projectSchema);
module.exports = Project;