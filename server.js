const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const App = express();

App.use(express.urlencoded({extended: false}));
//Converter body da requisição no formato JSON
App.use(bodyParser.json());
//Registra as chamadas ao servidor
App.use(morgan('combined'));


//routes
require('./App/Routes/')(App);

module.exports = App;