const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();



router.get("/about",wrapAsync(async (req,res)=>{
    res.render("about.ejs");
}));

module.exports = router;