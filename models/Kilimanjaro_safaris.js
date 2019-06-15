module.exports = function (sequelize, DataTypes) {
    var Kilimanjaro_safaris = sequelize.define("Kilimanjaro_safaris", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Kilimanjaro_safaris;
 };