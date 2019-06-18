var db = require("../models");
let Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function (app) {
  // GET all users -- working
  app.get("/api/user", function (req, res) {
    db.Users.findAll({}).then(function (data) {
      res.json(data);
    });
  });


  // GET all parks -- works

  app.get("/api/park", function (req, res) {
    db.Parks.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // GET all rides --- working
  app.get("/api/rides", function (req, res) {
    db.rides.findAll({}).then(function (data) {
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
      console.log(data);
    });
  });

  // POST a new plan -- working
  app.post("/api/plan", function(req, res) {
    db.Plans.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/rides", function(req,res) {
    db.rides.findAll({
      where: {park: req.body.currentPark}
    }).then(function(rideList) {
      res.json(rideList)
  });  
});

app.get("/api/rides/:ridename", function(req, res) {
  var ridename = req.params.ridename;
  var date = "8/30/2018"
    db.Seven_dwarfs_trains.findAll({
      where:{
        waitMin:{[Op.lte]: 30},
        useDate: date
  }}).then(function(bestTimes){
      res.render("index", {
        times: bestTimes,
  })
});
});
}  
  
  
//   switch(ride) {
//     case "Seven_dwarfs_trains":
//         db.Seven_dwarfs_trains.findAll({
//           where: {
//             waitMin: {[Op.lte]: 30},
//             useDate: pageData.currentDate 
//           }  
//         }).then(function(x) {
//           console.log(x);
//           //for loop on result object?
//           // if (waitTimes[i].waitMin < 30) 
//           //   console.log(waitTimes.useTime)
//         });
//       break;

//     case "Alien_saucers":
//       break;

//     case "Dinosaurs":
//       break;

//     case "Expedition_everests":
//       break;

//     case "Flight_of_passages":
//       break;

//     case "Kilimanjaro_safaris":
//       break;

//     case "Navi_rivers":
//       break;

//     case "Pirates_of_caribbeans":
//       break;

//     case "Rock_n_rollercoasters":
//       break;  

//     case "Slinky_dogs":
//       break;  

//     case "Soarins":
//       break;    

//     case "Spaceship_earths":
//       break;

//     case "Splash_mountains":
//       break;    

//     case "Toy_story_manias":
//       break;
//   }
// } 

// if (dbData.length > 0) {
//   for (i=0; i < dbData.length; i++) {
//     var thisRide = dbData[i].rideName;
//    rideMath(thisRide);
//    console.log(x)
//    }   
// }
// }