module.exports = function (sequelize, DataTypes) {
    var Soarins = sequelize.define("Soarins", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Soarins;
 };