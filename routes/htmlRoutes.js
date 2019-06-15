var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    // db.Plan.findAll({}).then(function() {
    res.render("index", {
      style: "index-style.css",
      javascript: "index.js"
    });
  });
  // });

  // Load user page after login
  app.get("/user", function (req, res) {
    // db.Plan.findAll({}).then(function () {
    res.render("user", {
      style: "user-style.css",
      javascript: "user.js"
    });
  });
  // });

  // Load user created plans page
  app.get("/user/create-plan", function (req, res) {
    // db.Plan.findAll({}).then(function() {
    res.render("create-plan", {
      style: "create-plan.css"
    });
  });
  // });

  // Load user saved plans page
  app.get("/user/saved-plans", function (req, res) {
    // db.Plan.findAll({}).then(function() {
    res.render("saved-plans", {
      style: "styles.css"
    });
  });
  // });

  //Load Exmaple Route page
  app.get("/example", function (req, res) {
    // db.Plan.findAll({}).then(function() {
    res.render("example", {
      style: "example-style.css"
    });
  });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
