module.exports = function (sequelize, DataTypes) {
    var Seven_dwarfs_trains = sequelize.define("Seven_dwarfs_trains", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Seven_dwarfs_trains;
 };