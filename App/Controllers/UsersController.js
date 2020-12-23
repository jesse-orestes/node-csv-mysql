const { Users } = require('../Models/');

module.exports = {
    async index(req, res){
        return res.send({Message: 'Hello Word'});
    }
}