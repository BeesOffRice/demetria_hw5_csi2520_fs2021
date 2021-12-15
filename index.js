const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");
const { appendFile } = require("fs");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.get("/", (req,res) => {
    res.render("index");
});

app.use(bodyParser.urlencoded({extended: true}));

app.set("viewengine","ejs");

app.use("/public", express.static(path.resolve(__dirname, 'public')));

//routes
app.get("/resume",(req,res) => {
    res.render("views/html/resume");
});

app.get("/facts",(req,res) => {
    res.render("views/html/facts");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
        return console.log(`Server is running on ${PORT}`);
    });