module.exports = {
    dialect: 'postgres',
    host: 'cortes-piranhas.herokuapp.com',
    username: 'postgres',
    password: '1234',
    database: 'cortes',
    define: {
        timestamps: true, //gera automaticamente createdAt e updatedAt
        underscored: true // define em snake case para linhas e colunas
    },
}