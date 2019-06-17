var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        style: "index-style.css",
        javascript: "index.js"
      });
    });

    app.get("/example", function(req, res) {
      res.render("example", {
        style: "example-style.css"
      });
    });


  // Build active user plan
  app.get("/user", function(req, res){
    db.rides.findAll({
      where: {park: req.body.currentPark}
  }).then(function(rideList) {
    res.render("user", {
        style: "user-style.css",
        javascript: "user.js",
        ride: rideList
      })
    })
  });

  // Load user created plans page
  app.get("/user/saved-plans/:user", function(req, res) {
    db.Plans.findAll({
      where: {user: req.params.user}
    }).then(function() {
      res.render("saved-plans", {
        style: "styles.css"
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
  };
