const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3001, function(){
    console.log("server started on port 3001");
});

