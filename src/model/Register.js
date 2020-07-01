const { Model, DataTypes } = require('sequelize');

class Register extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            hour: DataTypes.STRING,
        }, {
            sequelize   
        });
    }
}

module.exports = Register;
