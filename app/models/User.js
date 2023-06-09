const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class User extends Model {
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }

    set _email(email) {
        this.email = email;
    }

    get _email() {
        return this.email;
    }
}

// const user = await User.findByPk(1);
// user._email = '?@?.?';
// await user.save();
    

User.init(
    {
        firstname: DataTypes.TEXT,
        lastname: DataTypes.TEXT,
        email: DataTypes.TEXT,
        password: DataTypes.TEXT,
        pseudo: DataTypes.TEXT,
        role: DataTypes.TEXT,
        avatar: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'user',
        modelName: 'User',

    }
)

module.exports = User;