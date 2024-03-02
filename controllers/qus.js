
const Qus = require("../models/qus");


module.exports.createQus = async(req,res,next)=>{
    let {qus} = req.body;
    let newMsg = new Qus(qus);
    await newMsg.save();
    req.flash("success","Query Sent");
    res.redirect("/");
}

module.exports.renderPass = (req,res,next)=>{
    res.render("pass.ejs");
};

module.exports.showQus = async(req,res,next)=>{
    let {pass} = req.query;
    if(pass && pass==process.env.PASS_KEY){
        let data = await Qus.find({});
        res.render("messages.ejs",{data});
    }
    else{
        req.flash("error","Wrong pass key");
        res.redirect("/");
    }
}