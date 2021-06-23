var express = require('express');
var router = express.Router();
var path = require('path');

// 获取验证模块
var authorization = require(path.join(process.cwd(), "/modules/authorization"));

// 通过验证模块获取用户服务
var userServ = authorization.getService("UserService");

// 查询用户列表
router.get('/', function(req, res, next) {
    // 参数验证
    if (!req.query.pagenum || req.query.pagenum <= 0) return res.sendResult(null, 400, 'pagenum 参数错误');
    if (!req.query.pagesize || req.query.pagesize <= 0) return res.sendResult(null, 400, 'pagesize 参数错误');
    next();
}, function(erq, res, next) {
    
})

// 获取用户信息
router.get('/:id', function(req, res, next) {
    if (!req.params.id) {
        return res.sendResult(null, 400, '用户ID不能为空');
    }
    if (isNaN(parseInt(req.params.id))) return res.sendResult(null, 400, '用户ID必须是数字');
    next();
}, function(req, res, next) {
    userServ.getUser(req.params.id, function(err, result) {
        if (err) return res.sendResult(null, 400, err);
        res.sendResult(result, 200, "获取用户成功");
    })(req, res, next);
});

export default router