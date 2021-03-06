const express = require('express');
const routes = express.Router(); // VARIAVEL RESPONSAVEL PELAS ROTAS //


routes.get('/', (req, res, next) => {
    return res.redirect("/instructors")
})

routes.get('/instructors', (req, res) => {
    return res.render("instructors/index")
})

routes.get('/instructors/create', (req, res) => {
    return res.render("instructors/create")
})

routes.get('/members', (req, res) => {
    return res.send("members")
})

module.exports = routes