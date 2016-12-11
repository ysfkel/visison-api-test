var express = require('express');
var router = express.Router();
var http = require('http');
// var Client = require('node-rest-client').Client;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

var oxford = require('project-oxford'),
    client = new oxford.Client('f8233a092e554c96878d632bd6db18a5');

router.get('/api/vision',function(req,res){

client.face.detect({
    path: 'images/ng.jpg',
    analyzesAge: true,
    analyzesGender: true
}).then(function (response) {
    console.log('The age is: ' + response[0].attributes.age);
    console.log('The gender is: ' + response[0].attributes.gender);
});


})



// router.get('/api/vision',function(req,res){
//       console.log('hello')

//     //   res.json({
//     //     name:'hi'
//     //   })
//     var client = new Client();
 
// // set content-type header and data as json in args parameter 
// var args = {
//     data: { test: "hello" },
//     headers: { "Content-Type": "application/octet-stream","Ocp-Apim-Subscription-Key":"4381a3713ca5467a8a62e57463c61fa1" }
// };
 
// client.post("https://api.projectoxford.ai/face/v1.0/detect?", args, function (data, response) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     console.log(response);
//         res.json({
//         name:'hi'
//       })

// });

// })



 



module.exports = router;
