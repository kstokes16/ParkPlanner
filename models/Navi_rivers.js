module.exports = function (sequelize, DataTypes) {
    var Navi_rivers = sequelize.define("Navi_rivers", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Navi_rivers;
 };