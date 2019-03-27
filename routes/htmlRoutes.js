/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.happyhour.findAll({}).then(function(dbResult) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbResult
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/enter", function(req, res) {
    db.happyhour.findAll({}).then(function(dbResult) {
      res.render("enter", {
        msg: "Welcome to enter page!",
        hhEntries: dbResult
      });
    });
  });

  // view happy hours
  app.get("/view", function(req, res) {
    db.happyhour.findAll({}).then(function(dbResult) {
      res.render("view", {
        msg: "Welcome to view page!",
        hhEntries: dbResult
      });
    });
  });
  
  // add get route to submit page
  app.get("/POST", function(req,res){
    res.render("202");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
