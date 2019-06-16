module.exports = function (sequelize, DataTypes) {
    var Splash_mountains = sequelize.define("Splash_mountains", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Splash_mountains;
};
