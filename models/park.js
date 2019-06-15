module.exports = function (sequelize, DataTypes) {
    var Park = sequelize.define("Park", {
        title: DataTypes.STRING,
    });
    return Park;
};
