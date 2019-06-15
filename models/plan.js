module.exports = function(sequelize, DataTypes) {
  var Plan = sequelize.define("Plan", {
    title: DataTypes.STRING, 
    useDate: DataTypes.STRING,
    useTime: DataTypes.STRING,
    waitMin: DataTypes.STRING,
    actualMin: DataTypes.STRING, 
  });
  return Plan;
};
