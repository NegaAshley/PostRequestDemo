var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

//Use bodyparser to access requests in body
app.use(bodyParser.urlencoded({extended: true}));

//Default view engine
app.set("view engine", "ejs");

//Tells Express to serve contents of public directory
app.use(express.static("public"));

//Root route
app.get("/", function(req, res){
    res.render("home");    
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});