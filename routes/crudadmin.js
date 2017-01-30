
var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'),


router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  movieName: String,
  duration:Number,
  year:Number,
  category:String
 });
var Movie = mongoose.model('Movie', movieSchema, 'movie');


router.get('/mymovie', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/mymovie/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/mymovie', function(req, res){
  console.log(req.body);
  var name = req.body.movieName;
  var duration:req.body.duration,
  var year:req.body.year,
  var category:creq.body.atogory
  var movie = new Movie({

    moviName:name,
    durtn:duration,
    yr:year,
    ctgry:catogory
  });

  movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/mymovie/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/mymovie/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
