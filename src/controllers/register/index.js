const Register = require('../../model/Register');

module.exports = {
    async store(req, res) {
        try {
            const { name, description, hour } = req.body;

            const register = await Register.create({ name, description, hour });

            return res.json(register);
        } catch (error) {
            console.log('Erro: ' + error);
        }
    },

    async index(req, res) {
        try {
            const register = await Register.findAll();

            return res.json(register);
        } catch (error) {
            console.log('Erro: ' + error);
        }
    }
}