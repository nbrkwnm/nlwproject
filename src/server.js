//servidor

const express = require("express")
const server = express()

const { pageLanding, pageStudy, PageGiveClasses, saveClasses } = require("./pages")

// nunjucks (template engine)
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

server

.use(express.urlencoded({ extended: true }))
//inicio e config do server
server.use(express.static("public")) // config arquivos estáticos (css, scripts, imgs)
.get("/", pageLanding) // rotas 
.get("/study", pageStudy)
.get("/give-classes", PageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5000) //start
