module.exports = function (sequelize, DataTypes) {
    var Dinosaur = sequelize.define("Dinosaur", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Dinosaur;
 };