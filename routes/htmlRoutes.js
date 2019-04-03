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
    fakeimgurls = [
      "https://s3-media3.fl.yelpcdn.com/bphoto/afxEXycvDrHyrgNkxE7f1Q/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/YyVtu2ZqESabfz5gMkngqQ/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/PKSFW8k4kySc5E1Eyy07cQ/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/lDN7agPP6_bPfJ_ocT0TNw/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/fNxWQ66eU31mNCK4PaOZDA/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/N_cbl6Q0cMFQT_foOnpaUw/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/zLhiReYlhlZGCQq5F0ITpA/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/Vlgslxs4jllFUDR1ySkkGA/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/Ft1zEJC3cr9-uR_GJdYHXw/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/0GQjgRPUYOvDozoqF1t_jA/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/DdStrbCh-Z7r8aM_oYRf3w/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/PxaxisCkXQPUybqTNs8pZA/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/MdJIsN5HyB_wBYqwWg6U4g/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/YZJHQCaz4_DMg6kBJN5YkQ/ls.jpg",
      "https://s3-media1.fl.yelpcdn.com/bphoto/ZLO4FBk8AaogM_IyGpLv-Q/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/4Q2Ef0usdCHTEh9s2qmmng/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/nlcLluWHcv_91Awsil2ZfA/ls.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/yQfCQwphNyMbjuD4OznIGQ/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/vKp72x1m2jb0-2u-o0pL3A/ls.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/oeekQQcmuW3tEeq1mugnWw/ls.jpg"
    ];
    fakeimgurls.sort(() => Math.random() - 0.5); // shuffle
    // fakeimgurls = Object.assign({}, fakeimgurls);
    // console.log(fakeimgurls);
    db.happyhour.findAll({}).then(function(dbResult) {
      // console.log(dbResult);
      for (var i = 0; i< dbResult.length; i++) {
        dbResult[i]["hh_imgurl"] = fakeimgurls[i];
      }
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