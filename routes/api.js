var appRouter = require("express").Router()
var  db = require("../db/db.json")
var fs = require("fs")


appRouter.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    console.log("Get",db)
    res.json(db)
})

