const express = require('express');
const routes = express.Router();


routes.get('/users', (req, res) => {
    res.send({Message: 'Hello Word!'});
})



module.exports = routes;