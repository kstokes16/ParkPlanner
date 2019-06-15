var db = require("../models");

module.exports = function (app) {
  // GET all users -- working
  app.get("/api/user", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      res.json(data);
    });
  });


  // GET all parks -- works

  app.get("/api/park", function (req, res) {
    db.Park.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // GET all rides --- working
  app.get("/api/rides", function (req, res) {
    db.Rides.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // GET all plans -- working
  app.get("/api/plan", function (req, res) {
    db.Plans.findAll({}).then(function (data) {
      res.json(data);
    });
  });


  // POST a new user -- working 
  app.post("/api/user", function(req, res) {
    db.Users.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // POST a new plan -- working
  app.post("/api/plan", function(req, res) {
    db.Plans.create(req.body).then(function(data) {
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
