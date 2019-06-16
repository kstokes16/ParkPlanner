module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("User", {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Users;
};
