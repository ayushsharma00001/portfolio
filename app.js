if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
const ejsMate = require("ejs-mate");
app.engine("ejs",ejsMate);
const mongoose = require('mongoose');
const ExpressError = require("./utils/ExpressError");
const qusRoute = require("./routes/qus");  
const projectRoute = require("./routes/projects");  
const aboutAndContactRoute = require("./routes/aboutAndContact");  
const session = require("express-session");
const flash = require("connect-flash")
const wrapAsync = require("./utils/wrapAsync")
const MongoStore = require('connect-mongo');



// Mongo store setup
const db_url = process.env.DB_URL;
const store = MongoStore.create({
  mongoUrl:db_url,
  crypto:{
      secret:process.env.SECRET
  },
  tuchAfter:24*3600

});
store.on("error",()=>{
  console.log("Error occured on Mongo session store",err);
})

const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
}
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.get("/",(req,res,next)=>{
    res.render("home.ejs");
})


app.use("/",qusRoute);
app.use("/",projectRoute);
app.use("/",aboutAndContactRoute);



app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found"));
})

app.use((err,req,res,next)=>{
    let {statusCode = 500,message = "Something went Wrong"} =err;
    req.flash("error",message);
    res.status(err.statusCode).redirect("/");
})

const dbUrl = process.env.DB_URL;
async function main(){
    await mongoose.connect(dbUrl);
}
main().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err)
})
app.listen(8080,()=>{
    console.log("App is listening on port 8080");
})