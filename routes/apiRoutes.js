var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/create-plan/", function (req, res) {
    db.Plan.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/plan", function(req, res){
    db.Plan.create({
      where: {
        title: req.body.title,
        planDate: req.body.planDate
      }
    }).then(function(data){
      res.json(data);
      res.render("/create-plan");
    });
  });

  //??

  app.get("/api/park", function (req, res) {
    db.Park.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/rides", function (req, res) {
    db.Rides.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // Delete an example by id
  //   app.delete("/api/examples/:id", function (req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function () {
  //       res.json(dbExample);
  //     });
  //   });
};
