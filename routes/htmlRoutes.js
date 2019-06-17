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
  // Load user page after login
  app.get("/user", function (req, res) {
    db.Rides.findAll({}).then(function () {
      console.log(req.body)
    res.render("user", {
      style: "user-style.css",
      javascript: "user.js"
    });
  })
});

  // Load user page after login
  // Find all from Park model
  // app.get("/user", function(req, res) {
  //   db.Users.findAll({}).then(function() {
  //     res.render("user", {
  //       style: "user-style.css"
  //     });
  //   });
  // });


  // Build active user plan
  app.get("/user", function(req, res) {
    db.Rides.findAll({
      where: {park: pageData.currentPark}
    }).then(function(dbData) {
      res.render("create-plan", {
        style: "create-plan.css",
        javascript: "user.js",
        ride: dbData
      });
      
      function rideMath(ride) {
        switch(ride) {
          case "Seven_dwarfs_trains":
              db.Seven_dwarfs_trains.findAll({
                where: {
                  waitMin: {[Op.lte]: 30},
                  useDate: pageData.currentDate 
                }  
              }).then(function(x) {
                console.log(x);
                //for loop on result object?
                // if (waitTimes[i].waitMin < 30) 
                //   console.log(waitTimes.useTime)
              });
            break;

          case "Alien_saucers":
            break;
        
          case "Dinosaurs":
            break;
          
          case "Expedition_everests":
            break;

          case "Flight_of_passages":
            break;

          case "Kilimanjaro_safaris":
            break;

          case "Navi_rivers":
            break;

          case "Pirates_of_caribbeans":
            break;

          case "Rock_n_rollercoasters":
            break;  
            
          case "Slinky_dogs":
            break;  
          
          case "Soarins":
            break;    
            
          case "Spaceship_earths":
            break;
        
          case "Splash_mountains":
            break;    
                  
          case "Toy_story_manias":
            break;
        }
      } 

      if (dbData.length > 0) {
        for (i=0; i < dbData.length; i++) {
          var thisRide = dbData[i].rideName;
         rideMath(thisRide);
         console.log(x)
         }   
    }})
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
