/* eslint-disable indent */
/* eslint-disable prettier/prettier */
var db = require("../models");

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
  // Load user page after login
  // app.get("/user", function (req, res) {
  //   // db.Plan.findAll({}).then(function () {
  //   res.render("user", {
  //     style: "user-style.css",
  //     javascript: "user.js"
  //   });
  // });

  // Load user page after login
  // Find all from Park model
  app.get("/user", function(req, res) {
    db.User.findAll({}).then(function() {
      res.render("user", {
        style: "user-style.css",
      });
    });
  });


  // Build active user plan
  app.get("/user/create-plan/", function(req, res) {
    db.Rides.findAll({
      where: {park: "Magic Kingdom"}
      //"park" is field data submitted by user on button click - replace this
    }).then(function(dbData) {
      res.render("create-plan", {
        style: "create-plan.css",
        ride: dbData
      });
      if (dbData.length > 0){
        for (i=0; i < dbData.length; i++) {
          var thisRide = dbData[i].rideTitle;
          db.pirates_of_caribbean.findAll({
            where: {
              waitMin: 20
            }  
          }).then(function(x) {
            console.log(x);
            // if (waitTimes[i].waitMin < 30) 
            //   console.log(waitTimes.useTime)
          })
        }
    }})
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

  // Render meet the tem page
  app.get("/about-us", function(req, res) {
    res.render("meet-the-team", {
      style: "meet-the-team.css"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
  };
