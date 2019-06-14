var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/create-plan/", function (req, res) {
    db.Plan.findAll({}).then(function (data) {
      res.json(data);
    });
  });

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
  // app.post("/api/user", function (req, res) {
  //   db.User.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  //   app.delete("/api/examples/:id", function (req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function () {
  //       res.json(dbExample);
  //     });
  //   });
};
