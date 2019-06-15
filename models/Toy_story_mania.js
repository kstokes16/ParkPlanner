module.exports = function (sequelize, DataTypes) {
    var Toy_story_mania = sequelize.define("Toy_story_mania", {
        title: DataTypes.STRING,
        useDate: DataTypes.STRING,     
        useTime: DataTypes.STRING,
        waitMin: DataTypes.INTEGER,
        actualMin: DataTypes.INTEGER,
    });
    return Toy_story_mania;
 };