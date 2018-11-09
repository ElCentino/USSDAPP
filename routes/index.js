var express = require('express');
var router = express.Router();
const ussdRouter = require('./ussd');

router.use('/ussd', ussdRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
