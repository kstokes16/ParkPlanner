module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return User;
};
