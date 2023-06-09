// require('dotenv').config();
const Sequelize = require('sequelize');

/**
 * * Cette fonction va retourner une instance de sequelize qui permettra aux modèles sequelize de se connecter à la BDD
 *  */
function getConnexion() {

    return new Sequelize(process.env.PG_URL, {
        dialect: process.env.DIALECT,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        logging: false,
    });
}

module.exports = getConnexion;
