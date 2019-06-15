module.exports = function (sequelize, DataTypes) {
   var Pirates_of_caribbean = sequelize.define("Pirates_of_caribbean", {
       title: DataTypes.STRING,
       useDate: DataTypes.STRING,     
       useTime: DataTypes.STRING,
       waitMin: DataTypes.INTEGER,
       actualMin: DataTypes.INTEGER,
   });
   return Pirates_of_caribbean;
};