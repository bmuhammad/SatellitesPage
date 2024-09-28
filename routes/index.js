var express = require('express');
var router = express.Router();
const apiHelper = require('../helpers/apiHelper')

/* GET home page. */
router.get('/', function(req, res, next) {

apiHelper.callApi('https://satellite-rest-api.vercel.app/')
.then(response => {
  console.log(response);
  res.render('index', {title: "Satellites", data: response});
})
.catch(error => {
  res.send(error)
})

});

module.exports = router;
