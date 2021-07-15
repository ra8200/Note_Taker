var express = require("express");
var app = express()
var PORT = 3001


app.use(express.json())
app.use(express.urlencoded({extended:true})) // This req.body(user data) in the routes
app.use(express.static("public"))


var routesApi = require("./routes/api")
var routesHtml = require("./routes/html");


app.use(routesApi);
app.use(routesHtml)












app.listen(PORT,function(){
    console.log(`App listening on  ${PORT}`)
})