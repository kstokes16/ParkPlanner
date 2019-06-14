module.exports = function(sequelize, DataTypes) {
  var Plan = sequelize.define("userPlans", {
    user: DataTypes.STRING,
    date: DataTypes.STRING,
    plan: DataTypes.STRING,
  });
  return Plan;
};
