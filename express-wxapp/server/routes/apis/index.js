var express = require('express');
var router = express.Router();

var infoApis = require('./info/index');
var userApis = require('./user/index');
var activeApis = require('./active/index');

// /* GET api. */
router.use( '/info', infoApis );
router.use( '/active', activeApis );
router.use( '/user', userApis );


module.exports = router;
