var express = require('express');
var router = express.Router();

/* GET api. */
router.get('/', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});





// 用户登录
router.post('/', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});





module.exports = router;
