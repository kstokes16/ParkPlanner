module.exports = function (sequelize, DataTypes) {
    var Spaceship_earth = sequelize.define("Spaceship_earth", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Spaceship_earth;
 };