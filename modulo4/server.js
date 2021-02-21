// CONFIGUANDO O SERVIDOR //
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public')) // MIDDLEWARE .USE //
server.use(routes)

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});
// COLOCANDO O SERVIDOR ONLINE //
server.listen(5000, () => {
    console.log("server is runing ok")
});