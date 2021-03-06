const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


//Get and Post for index.html
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculator is " + result);
});



//Get and Post for bmiCalculator
app.get("/bmi", function(req,res){
    res.sendfile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", function(req,res){
    var weight = req.body.weight;
    var height = req.body.height;

    var result = weight / (height * height);

    res.send("result haiga " + result);
})
app.listen(3001, function(){
    console.log("server started on port 3001");
});

