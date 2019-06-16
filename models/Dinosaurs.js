module.exports = function (sequelize, DataTypes) {
    var Dinosaurs = sequelize.define("Dinosaurs", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Dinosaurs;
 };