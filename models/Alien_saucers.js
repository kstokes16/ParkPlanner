module.exports = function (sequelize, DataTypes) {
    var Alien_saucers = sequelize.define("Alien_saucers", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Alien_saucers;
 };