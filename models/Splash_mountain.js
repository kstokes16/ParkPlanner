module.exports = function (sequelize, DataTypes) {
    var Splash_mountain = sequelize.define("Splash_mountain", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Splash_mountain;
 };