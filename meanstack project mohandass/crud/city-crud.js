
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'),


router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  cityID:String;
  cityName: String
 });
var City = mongoose.model('City',citySchema, 'City');


router.get('/city', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    City.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/city/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     City.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/city', function(req, res){
  console.log(req.body);
  var id = req.body.cityID;
  var name = req.body.cityName;
var city1 = new Movie({
    cityID:id,
    cityName:name
});

  city1.save(function(err, docs){
    if ( err ) throw err;
    console.log("city Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/city/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      City.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/city/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
  City.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
