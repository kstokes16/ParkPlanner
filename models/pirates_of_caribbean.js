module.exports = function (sequelize, DataTypes) {
    var pirates_of_caribbean = sequelize.define("pirates_of_caribbean", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return pirates_of_caribbean;
 };