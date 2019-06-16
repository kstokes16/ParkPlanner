module.exports = function (sequelize, DataTypes) {
    var Slinky_dog = sequelize.define("Slinky_dog", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Slinky_dog;
 };