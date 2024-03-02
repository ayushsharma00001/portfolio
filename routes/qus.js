const mongoose = require("mongoose")
const ExpressError = require("../utils/ExpressError")
const Qus = require("../models/qus");
const {validateQus} = require("../middleware")

const express = require("express")
const route = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { createQus, renderPass, showQus } = require("../controllers/qus");


route.post("/msg",validateQus,wrapAsync(createQus));
route.get("/msg/pass",wrapAsync(renderPass));
route.get("/msg/pass/messages",wrapAsync(showQus));



module.exports = route;