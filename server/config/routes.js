var mongoose = require("mongoose");
const path = require("path");

poll = require("./../controllers/polls.js");

module.exports = function(app){

    app.get("/logout", function(req, res){
        console.log("Inside Logout Express route");
        req.session.destroy();
        res.redirect("/")
    })

    app.get("/destroySession", function(req, res){
        console.log("Inside the destroy session express routing method.");
        req.session.destroy();
        res.json(true);
    })

    app.post("/setSession", function(req, res){
        console.log("Inside Set Session Server Express route.");
        req.session.userName = req.body.userName;
        req.session.save();
    })
    app.get("/checkSession", function(req, res){
        console.log(`Inside GET Session Server Express route ${req.session.userName}`)
        res.json({userName:req.session.userName});
    })

    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });

}
