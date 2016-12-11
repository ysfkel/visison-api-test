var express = require('express');
var router = express.Router();
var http = require('http');
// var Client = require('node-rest-client').Client;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

var oxford = require('project-oxford'),
    client = new oxford.Client('a8d9973a4e924c64aa259187672d1ac3');

router.get('/api/vision',function(req,res){

client.vision.analyzeImage({
    path: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9t1lINJCdw2jh9PgA4Y__8-v0UjoQb79o8-KEQwfmRKfgrHbi",//'public/images/racy.jpg',
    Adult: true
}).then(function (response) {
       console.log('vision')
    console.log(response)
    //console.log('The age is: ' + response[0].attributes.age);
   // console.log('The gender is: ' + response[0].attributes.gender);
});




})



//project oxford nodejs page 
//https://github.com/felixrieseberg/project-oxford




 



module.exports = router;
