const User = require('./User');
const Article = require('./Article');
const Category = require('./Category');

// * one-to-one : hasOne belongsTo
// * one-to-many : hasMany belongsTo (réciproque)
// * many-to-many : belongsToMany

User.hasMany(Article, {
    as: 'articles',
    foreignKey: 'user_id',
});

Article.belongsTo(User, {
    as: 'author',
    foreignKey: 'user_id',
});


Article.belongsToMany(Category, {
    as: 'categories',
    through: 'article_has_category',
    foreignKey: 'article_id',
    otherKey: 'category_id',
});

Category.belongsToMany(Article, {
    as: 'articles',
    through: 'article_has_category',
    otherKey: 'category_id',
    foreignKey: 'article_id',
});

module.exports = { User, Article, Category };