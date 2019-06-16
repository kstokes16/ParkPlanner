module.exports = function(sequelize, DataTypes) {
  var Plans = sequelize.define("Plans", {
    title: DataTypes.STRING,
    planDate: DataTypes.STRING,
    user: DataTypes.STRING,
    park: DataTypes.STRING,
    ride8AM: DataTypes.STRING,
    ride10AM: DataTypes.STRING,
    ride12PM: DataTypes.STRING,
    ride2PM: DataTypes.STRING,
    ride4PM: DataTypes.STRING,
    ride6PM: DataTypes.STRING,
    ride8PM: DataTypes.STRING
  });
  return Plans;
};
