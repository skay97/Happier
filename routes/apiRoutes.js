var db = require("../models");
var multer = require('multer');
var upload = multer({ dest: __dirname + '/uploads/images' });


module.exports = function (app) {
  // Get all examples
  app.get("/api/happyhour", function (req, res) {
    db.happyhour.findAll({}).then(function (dbResult) {
      res.json(dbResult);
    });
  });

  // Create a new example
  app.post("/api/happyhour", function (req, res) {
    db.happyhour.create(req.body).then(function (dbResult) {
      res.json(dbResult);
    });
  });

  // Delete an example by id
  app.delete("/api/happyhour/:id", function (req, res) {
    db.happyhour
      .destroy({ where: { id: req.params.id } })
      .then(function (dbResult) {
        res.json(dbResult);

      });
  });


  // upload picture
  app.post('/upload', upload.single('photo'), (req, res) => {
    if (req.file) {
      res.json(req.file);
    }
    else throw 'error';
  });
};
