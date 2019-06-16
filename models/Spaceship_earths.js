module.exports = function (sequelize, DataTypes) {
    var Spaceship_earths = sequelize.define("Spaceship_earths", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Spaceship_earths;
 };