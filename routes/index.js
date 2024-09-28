var express = require('express');

// Initialize Express
let app = express();

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

app.use('/', router);

//Configure cors
app.use(cors());

//Create server to listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


module.exports = router;
