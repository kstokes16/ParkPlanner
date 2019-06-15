var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        style: "index-style.css"
      });
    });

  // Load user page after login
  // Find all from Park model
  app.get("/user", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("user", {
        style: "user-style.css"
      });
    });
  });


//JQuery
// $.get() find all where park = (parkname from user click)
  //respond with rides from Ridenames table

// $.post each time user clicks on a ride
  //post to "timeslot" via dropdown menu
  //

// $.post to save the plans

  // Build active user plan
  app.get("/user/create-plan/:id", function(req, res) {
    db.Plan.findAll({
      where: {id: req.params.id}
    }).then(function() {
      res.render("create-plan", {
        style: "create-plan.css"
      });
    });
  });

  // Load user created plans page
  app.get("/user/saved-plans/:user", function(req, res) {
    db.Plan.findAll({
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
