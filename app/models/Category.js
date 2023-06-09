const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Category extends Model {}

// const user = await User.findByPk(1);
// user._email = '?@?.?';
// await user.save();

Category.init(
    {
        name: DataTypes.TEXT,
        color: DataTypes.TEXT,        
        },
    {
        sequelize: getConnexion(),
        tableName: 'category',
        modelName: 'Category',
    }
);

module.exports = Category;
