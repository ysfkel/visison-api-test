var express = require('express');
var router = express.Router();

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

module.exports = router;
