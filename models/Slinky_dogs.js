module.exports = function (sequelize, DataTypes) {
    var Slinky_dogs = sequelize.define("Slinky_dogs", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Slinky_dogs;
 };