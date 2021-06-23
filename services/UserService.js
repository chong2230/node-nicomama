var path = require("path");
var userDao = require(path.join(process.cwd(), "dao/UserDao"));
var Password = require("node-php-password");
var logger = require("../modules/logger").logger;

/**
 * 获取所有用户
 * @param  {[type]}   conditions 查询条件
 * 查询条件统一规范
 * conditions
	{
		"query" : 关键词查询,
		"pagenum" : 页数,
		"pagesize" : 每页长度
	}
 * @param  {Function} cb         回调函数
 */
module.exports.getAllUsers = function(conditions, cb) {
    if (!conditions.pagenum) return cb("pagenum 参数不合法");
    if (!conditions.pagesize) return cb("pagesize 参数不合法");

    // 通过关键词获取用户数量
}

/**
 * 通过用户ID获取用户信息
 * 
 * @param  {[type]}   id 用户 ID
 * @param  {Function} cb 回调函数
 */
module.exports.getUser = function(id, cb) {
    userDao.show(id, function(err, user) {
        if (err) return cb(err);
        if (!user) return cb('该用户不存在');
        cb(
            null,
            {
                "user_id": user.user_id,
                "username": user.username,
                "user_tel": user.user_tel
            }
        )
    })
}

/**
 * 用户登录
 * @param  {[type]}   username 用户名
 * @param  {[type]}   password 密码
 * @param  {Function} cb       回调
 */
module.exports.login = function(username, password, cb) {
    logger.debug('login => username:%s', username);
    userDao.findOne({"username": username}, function(err, user) {
        logger.debug(err);
        if (err || !user) return cb("用户名不存在");
        if (Password.verify(password, user.password)) {
            cb(
                null,
                {
                    "user_id": user.user_id,
                    "username": user.username,
                    "user_tel": user.user_tel
                }
            );
        } else {
            return cb("密码错误");
        }
    })
}