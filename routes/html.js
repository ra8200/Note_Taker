var appRouter = require("express").Router()
var path = require("path")


appRouter.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
appRouter.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})
appRouter.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = appRouter;
