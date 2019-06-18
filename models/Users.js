module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Users;
};
