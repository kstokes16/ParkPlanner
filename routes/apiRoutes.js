var db = require("../models");

//app.post route to Plans API

module.exports = function(app) {
  // Get all examples
  app.get("/api/create-plan", function(req, res) {
    db.Plan.findAll({
      // where: {
      //   date: req.body.date,
      //   park: req.body.park,
      // }
    }).then(function(dbResponse) {
      // waitTimes = [];
      // for (i=0; i < dbResponse.length; i++) {
      // if (dbResponse[i].waitTime < 30) {
        // dbResponse[i].waitTimes.push(waitTimes);
        // console.log(waitTimes);
      // }
      // }
      res.json(dbResponse);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function() {
      res.json(dbExample);
    });
  });
};
