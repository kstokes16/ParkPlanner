module.exports = function (sequelize, DataTypes) {
    var Park = sequelize.define("park", {
        title: DataTypes.STRING,
    });
    return Park;
};
