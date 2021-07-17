const express = require("express");
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended:true})) // This req.body(user data) in the routes
app.use(express.static("public"))

const routesApi = require("./routes/api")
const routesHtml = require("./routes/html");

app.use(routesApi);
app.use(routesHtml)

app.listen(PORT,function(){
    console.log(`App listening on  ${PORT}`)
})