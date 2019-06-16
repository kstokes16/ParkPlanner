module.exports = function (sequelize, DataTypes) {
    var Expedition_everest = sequelize.define("Expedition_everest", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Expedition_everest;
 };