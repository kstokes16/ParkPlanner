module.exports = function (sequelize, DataTypes) {
    var rides = sequelize.define("rides", {
        rideTitle: DataTypes.STRING,
        rideName: DataTypes.STRING,
        park: DataTypes.STRING,
        rideDescription: DataTypes.STRING,
        imgURL: DataTypes.STRING
    });
    return rides;
};
