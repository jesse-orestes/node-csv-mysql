module.exports = (App) =>{
    App.use('/api', require('./Users'));
    App.use(function(req, res) {
        res.status(400).send({Error: `Error 404: Path(${req.url}) not found for method(${req.method})`});
    })
}