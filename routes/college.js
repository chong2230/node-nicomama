var express = require('express');
var router = express.Router();
var path = require('path');

// 获取验证模块
var authorization = require(path.join(process.cwd(), "/modules/authorization"));

// 通过验证模块获取学院服务
var collegeServ = authorization.getService("CollegeService");

// 查询学院列表
router.get('/', function(req, res, next) {
    // 参数验证
    if (!req.query.pagenum || req.query.pagenum <= 0) return res.sendResult(null, 400, 'pagenum 参数错误');
    if (!req.query.pagesize || req.query.pagesize <= 0) return res.sendResult(null, 400, 'pagesize 参数错误');
    next();
}, function(req, res, next) {
    collegeServ.getColleges({
        pagenum: req.query.pagenum,
        pagesize: req.query.pagesize
    }, function(err, result) {
        if (err) return res.sendResult(null, 400, err);
        res.sendResult(result, 200, "获取学院列表成功");
    })(req, res, next);
})

// 获取学院信息
router.get('/detail', function(req, res, next) {
    if (!req.query.category) {
        return res.sendResult(null, 400, '菜单ID不能为空');
    }
    if (!req.query.id) {
        return res.sendResult(null, 400, '分类ID不能为空');
    }
    if (isNaN(parseInt(req.query.category))) return res.sendResult(null, 400, '菜单ID必须是数字');
    if (isNaN(parseInt(req.query.id))) return res.sendResult(null, 400, '分类ID必须是数字');
    next();
}, function(req, res, next) {
    collegeServ.getCollegeByIds(req.query.category, req.query.id, function(err, result) {
        if (err) return res.sendResult(null, 400, err);
        console.log(result);
        res.sendResult(result, 200, "获取学院成功");
    })(req, res, next);
});

export default router