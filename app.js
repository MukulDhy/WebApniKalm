const express = require("express");
const app = express();

require("./Db/connMongoDb");
const LoginFormDetails = require("./models/apniKalmSchema");
const path = require("path");
const hbs =require("hbs");
const port = process.env.PORT || 7500 ;
const router = require("./router/requests")
app.use(express.static(path.join(__dirname , "../public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(router);
app.set("views", path.join(__dirname, "../templates/views"));

app.set("view engine" , "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));





app.get("/" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('index.hbs')
});
app.get("/index" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('index.hbs')
});
app.get("/loginPage" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('loginPage.hbs')
});
app.get("/register" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('registration.hbs')
});
app.get("/ComingSoon" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('ComingSoon.hbs')
});
app.get("/testPage" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('testPage.hbs')
});
app.get("/profilePage" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('profilePage.hbs')
});
app.get("/progressReport" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('progressReport.hbs')
});
app.get("/addPaperDetails" , (req,res) => {
    // res.send("Hlw from the home page.");
    res.render('addPaperDetails.hbs')
});


app.listen(port , "127.0.0.1" , (req,res) => {
    console.log(`I can see Your File at ${port} number `);
});
