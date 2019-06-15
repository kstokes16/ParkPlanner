module.exports = function (sequelize, DataTypes) {
    var Navi_river = sequelize.define("Navi_river", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Navi_river;
 };