/* eslint-disable prettier/prettier */
var db = require("../models");

// upload requires
// var multer = require('multer');
// var upload = multer({dest: __dirname + '/uploads/images'});


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.happyhour.findAll({}).then(function (dbResult) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbResult
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/enter", function (req, res) {
    db.happyhour.findAll({}).then(function (dbResult) {
      res.render("enter", {
        msg: "Welcome to enter page!",
        hhEntries: dbResult
      });
    });
  });

  // view happy hours
  app.get("/view", function(req, res) {
    db.happyhour.findAll({}).then(function(dbResult) {
      console.log(dbResult);
      
      res.render("view", {
        msg: "Welcome to view page!",
        hhEntries: dbResult
      });
    });
  });

  app.get("/view/:id", function (req, res) {
    db.happyhour.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbResult) {
      res.render("viewOne", {
        msg: "Welcome to view page!",
        hhEntry: dbResult
      });
    });
  });

  // uploads route
  app.get("/uploads", function (req, res) {
    db.happyhour.findAll({}).then(function (dbResult) {
      res.render("uploads", {
        msg: "Welcome to the upload page!",
        hhEntries: dbResult
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });



};