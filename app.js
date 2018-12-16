var express = require("express");
var app = express();

//Default view engine
app.set("view engine", "ejs");

//Tells Express to serve contents of public directory
app.use(express.static("public"));

//Root route
app.get("/", function(req, res){
    res.render("home");    
});

app.post("/addFriend", function(req, res){
    res.send("YOU HAVE REACHED THE POST ROUTE!");
});

app.get("/friends", function(req, res){
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});