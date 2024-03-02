const wrapAsync = require("../utils/wrapAsync");
const Project = require("../models/projects");
const express = require("express");
const router = express.Router();

router.get("/projects",wrapAsync(async (req,res,next)=>{
    let data = await Project.find({});
    res.render("projects.ejs",{data});
}));


module.exports = router;