var express = require('express');
var router = express.Router();
var service = require("../controllers/token-service")
const { logger, LoggingLevels } = require('../config/winston');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const username = "admin";
  const pwd = "password";
  logger.log( LoggingLevels.INFO, +" Username :"+ username, "  pwd: "+ pwd)
  const account = {
    username: username,
    password: pwd,
  };

   service.getTokenService(account).then( result =>{
    console.log(" 100 rubeeeeees:  ",result)
    res.status(200);
    res.json(JSON.parse(result));
  })
  .catch(err => {
    console.log("Error --->", err)
    res.status(500);
    res.json("Server Down");
  });  

});

module.exports = router;
