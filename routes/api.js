const appRouter = require("express").Router()
const  db = require("../db/db.json")
const fs = require("fs")


appRouter.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    console.log("Get",db)
    res.json(db)
})
appRouter.post("/api/notes",function(req,res){
    let recentNote = {
        id: Math.floor(Math.random()*100),
        title: req.body.title,
        text:req.body.text
    }

    db.push(recentNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if (err) throw err;
    })
    console.log("POST",db)
     res.json(db)
})
appRouter.delete("/api/notes/:id",function(req,res){
    var updatedNotes = []
    for(let i = 0; i < db.length; i++) {
        if(db[i].id != req.params.id){
            updatedNotes.push(db[i])
        }
    }
    db = updatedNotes
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if (err) throw err;
    })
    console.log("POST",db)
     res.json(db)
})
module.exports = appRouter