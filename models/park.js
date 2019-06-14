module.exports = function (sequelize, DataTypes) {
    var Park = sequelize.define("userPlans", {
        title: DataTypes.STRING,
    });
    return Park;
};
