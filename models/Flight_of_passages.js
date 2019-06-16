module.exports = function (sequelize, DataTypes) {
    var Flight_of_passages = sequelize.define("Flight_of_passages", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Flight_of_passages;
 };