const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class Article extends Model {}

// const user = await User.findByPk(1);
// user._email = '?@?.?';
// await user.save();

Article.init(
    {
        title: DataTypes.TEXT,
        subtitle: DataTypes.TEXT,
        image: DataTypes.TEXT,
        body: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
        resume: DataTypes.TEXT,
        },
    {
        sequelize: getConnexion(),
        tableName: 'article',
        modelName: 'Article',
    }
);

module.exports = Article;
