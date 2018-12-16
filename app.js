var express = require("express");
var app = express();

//Default view engine
app.set("view engine", "ejs");

//Root route
app.get("/", function(req, res){
    res.render("home");    
});

app.get("/friends", function(req, res){
    res.render("friends");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});