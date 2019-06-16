module.exports = function (sequelize, DataTypes) {
    var Rock_n_rollercoasters = sequelize.define("Rock_n_rollercoasters", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Rock_n_rollercoasters;
 };