const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");
const { appendFile } = require("fs");
const bodyParser = require('body-parser');
const path = require("path");
const { body,validationResult } = require('express-validator');
const { request } = require("http");
const { CLIENT_LONG_PASSWORD } = require("mysql/lib/protocol/constants/client");
const { nextTick } = require("process");

//functions
var points=0;

function isCorrect(x,y){
    if (x==y){
        points++;
        return true;
    } else {
        return false;
    }
}

//initizlizing the server
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set("viewengine","ejs");

app.use("/public", express.static(path.resolve(__dirname, 'public')));

//routes
app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/resume",(req,res) => {
    res.render("html/resume.ejs");
});

app.get("/facts",(req,res) => {
    res.render("html/facts.ejs");
});

app.get("/trivia",(req,res)=>{
    res.render("html/trivia.ejs");
});

app.get("/answers",(req,res)=>{
    res.render("html/triviaAnswers.ejs");
});

app.post("/answer",(req,res)=>{
    let a1 = req.body.answer1;
    let a2 = req.body.answer2;
    let a3 = req.body.answer3;
    let a4 = req.body.answer4;
    let a5 = req.body.answer5;

    console.log(a1);
    console.log(a2);

    isCorrect(a1,"a");
    isCorrect(a2,"b");
    isCorrect(a3,"c");
    isCorrect(a4,"b");
    isCorrect(a5,"a");
    console.log(points);

    res.send(`you got ${points} questions right`);
    
    points=0;
    // res.end("ending the process i think");
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
        return console.log(`Server is running on ${PORT}`);
    });