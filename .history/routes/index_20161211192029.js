var express = require('express');
var router = express.Router();
var http = require('http');
var Client = require('node-rest-client').Client;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});


router.get('/api/vision',function(req,res){
      console.log('hello')
get();
    //   res.json({
    //     name:'hi'
    //   })
})



 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/octet-stream" }
};
 
client.post("http://remote.site/rest/xml/method", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});


module.exports = router;
