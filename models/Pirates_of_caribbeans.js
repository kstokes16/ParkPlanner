module.exports = function (sequelize, DataTypes) {
   var Pirates_of_caribbeans = sequelize.define("Pirates_of_caribbeans", {
       title: DataTypes.STRING,
       useDate: DataTypes.STRING,     
       useTime: DataTypes.STRING,
       waitMin: DataTypes.INTEGER,
       actualMin: DataTypes.INTEGER,
   });
   return Pirates_of_caribbeans;
};