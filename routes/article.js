var express = require('express');
var router = express.Router();
var path = require('path');

// 获取验证模块
var authorization = require(path.join(process.cwd(), "/modules/authorization"));

// 通过验证模块获取文章服务
var articleServ = authorization.getService("ArticleService");

// 查询文章列表
router.get('/', function(req, res, next) {
    // 参数验证
    if (!req.query.pagenum || req.query.pagenum <= 0) return res.sendResult(null, 400, 'pagenum 参数错误');
    if (!req.query.pagesize || req.query.pagesize <= 0) return res.sendResult(null, 400, 'pagesize 参数错误');
    next();
}, function(req, res, next) {
    articleServ.getArticles({
        pagenum: req.query.pagenum,
        pagesize: req.query.pagesize
    }, function(err, result) {
        if (err) return res.sendResult(null, 400, err);
        res.sendResult(result, 200, "获取文章列表成功");
    })(req, res, next);
})

// 获取文章信息
router.get('/:id', function(req, res, next) {
    if (!req.query.id) {
        return res.sendResult(null, 400, '文章ID不能为空');
    }
    if (isNaN(parseInt(req.query.id))) return res.sendResult(null, 400, '文章ID必须是数字');
    next();
}, function(req, res, next) {
    articleServ.getArticle(req.query.id, function(err, result) {
        if (err) return res.sendResult(null, 400, err);
        res.sendResult(result, 200, "获取文章成功");
    })(req, res, next);
});

export default router