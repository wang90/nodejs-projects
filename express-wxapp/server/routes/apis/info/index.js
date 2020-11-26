var express = require('express');
var router = express.Router();

/* GET api. */
router.get('/', function(req, res, next) {
    res.json({
        'msg': 'api info is ok',
        'status': 0,
    });
});

module.exports = router;
