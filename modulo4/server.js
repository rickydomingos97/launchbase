const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")
server.use(express.static('./images'))

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/14863048?s=460&u=aecfdc36d9e17f6394f8421a7c7f534fd953e018&v=4",
        name: "Ricardo Domingos",
        role: "Rocketseat Student",
        description: 'Fullstack programmer getting studies on <a href="http://www.rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "GitHub", url: "http://github.com" },
            { name: "Linkedin", url: "http://linkedin.com" },
            { name: "Twitter", url: "http://twitter.com" }
        ]
    }


    return res.render("about", { about: about})
})

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", { items: videos})
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video nao encontrado!")
    }

    return res.render("video", { item: video})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})


server.listen(5000, () => {
    console.log("server is runing ok")
})