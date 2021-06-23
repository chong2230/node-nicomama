import express from 'express';
import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';
var path = require('path')

var app = express();

/**
 *
 * 公共系统初始化
 *
 */
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())
 
 // 初始化数据库模块
 var database = require('./modules/database')
 database.initialize(app, function(err) {
   if (err) {
     console.error('连接数据库失败失败 %s', err)
   }
 })

// 设置跨域和相应数据格式
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    if (req.method == 'OPTIONS') res.send(200)
    /*让options请求快速返回*/ else next()
  })
  
// 初始化统一响应机制
var resextra = require('./modules/resextra')
app.use(resextra)

// 获取验证模块
var authorization = require(path.join(process.cwd(), '/modules/authorization'))

// 设置全局权限
authorization.setAuthFn(function(req, res, next, serviceName, actionName, passFn) {
  // if (!req.userInfo || isNaN(parseInt(req.userInfo.rid))) return res.sendResult('无角色ID分配')
  // // 验证权限
  // roleService.authRight(req.userInfo.rid, serviceName, actionName, function(err, pass) {
  //   passFn(pass)
  // })
  passFn(true)
})

app.use(cookieParser());

router(app);

app.use(history());
app.use(express.static('./public'));
app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});