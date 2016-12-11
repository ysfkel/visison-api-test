var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});


router.get('/api/vision',function(req,res){
      console.log('hello')

      res.json({
        name:'hi'
      })
})


//2.
// var extServerOptions = {
//     host: 'localhost',
//     port: '3752',
//     path: '/api/EmployeeInfoAPI',
//     method: 'GET'
// };
//3.
function get() {
    http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            emp = JSON.parse(data);
            // emp.foreach(function (e) {
            //     console.log(e.EmpNo + "\t" + e.EmpName + "\t" + e.Salary + "\t" + e.DeptName + "\t" + e.Designation);
            // });
        });
 
    }).end();
};
 
get();


module.exports = router;
