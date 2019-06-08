var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load user page after login
  app.get("/user", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("user");
    });
  });

  // Load user created plans page
  app.get("/user/create-plan", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("create-plan");
    });
  });

  // Load user created plans page
  app.get("/user/saved-plans", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("saved-plans");
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
