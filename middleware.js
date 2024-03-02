const {qusSchema} = require("./SchemaValidity/schema")

module.exports.validateQus = (req,res,next)=>{
    let {error} = qusSchema.validate(req.body);
    if(error){
        let errorMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
    else{
        next();
    }
};