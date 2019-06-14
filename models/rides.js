module.exports = function (sequelize, DataTypes) {
    var Rides = sequelize.define("rides", {
        rideTitle: DataTypes.STRING,
        park: DataTypes.STRING
    });
    return Rides;
};
