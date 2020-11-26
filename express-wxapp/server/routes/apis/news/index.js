var express = require('express');
var router = express.Router();

/* GET api. */
// 获取新闻list 
router.get('/lists', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});

// 获取新闻获取单个新闻
router.get('/list', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});

// 创建新闻内容
router.put('/list', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});


// 修改新闻内容
router.post('/list', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});

// 删除新闻内容
router.delete('/list', function(req, res, next) {
    res.json({
        'msg': 'api user is ok',
        'status': 0,
    });
});


module.exports = router;
