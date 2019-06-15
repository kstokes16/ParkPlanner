module.exports = function (sequelize, DataTypes) {
    var Soarin = sequelize.define("Soarin", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Soarin;
 };