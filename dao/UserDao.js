var path = require('path');
var daoModule = require('./Dao');
var databaseModule = require(path.join(process.cwd(), "modules/database"));

/**
 * 创建用户
 * 
 * @param {[type]} obj 用户信息
 * @param {Function} cb 回调函数
 */
module.exports.create = function(obj, cb) {
    daoModule.create("UserModule", obj, cb);
}

/**
 * 获取用户列表
 * 
 * @param  {[type]}   conditions 查询条件
 * @param  {Function} cb         回调函数
 */
 module.exports.list = function(conditions,cb) {
	daoModule.list("UserModel",conditions,function(err,models) {
		if(err) return cb(err,null);
		cb(null,models);
	});
}

/**
 * 通过查询条件获取用户对象
 * 
 * @param  {[type]}   conditions 条件
 * @param  {Function} cb         回调函数
 */
 module.exports.findOne = function(conditions,cb) {
	daoModule.findOne("UserModule",conditions,cb);
}

/**
 * 通过关键词查询用户
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
 module.exports.findByKey = function(key,offset,limit,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM gt_user as user";

	if(key) {
		sql += " WHERE username LIKE ? LIMIT ?,?";
		database.driver.execQuery(
			sql
		,["%" + key + "%",offset,limit],function(err,users){
			if(err) return cb("查询执行出错");
			cb(null,users);
		});
	} else {
		sql += " LIMIT ?,? ";
		database.driver.execQuery(sql,[offset,limit],function(err,users){
			if(err) return cb("查询执行出错");
			cb(null,users);
		});
	}
}

/**
 * 判断用户是否存在
 * 
 * @param  {[type]}   username 用户名
 * @param  {Function} cb       回调函数
 * 
 */
module.exports.exists = function(username, cb) {
	var db = databaseModule.getDatabase();
	var Model = db.models.UserModel;
	Model.exists({"username": username}, function(err, isExists) {
		if (err) return cb("查询失败");
		cb(null, isExists);
	})
}

/**
 * 模糊查询用户数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
 module.exports.countByKey = function(key,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT count(*) as count FROM gt_user";
	if(key) {
		sql += " WHERE username LIKE ?";
		database.driver.execQuery(
			sql
		,["%" + key + "%"],function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result[0]["count"]);
		});
	} else {
		database.driver.execQuery(sql,function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result[0]["count"]);
		});
	}
	
}

/**
 * 通过ID获取用户对象数据
 * 
 * @param  {[type]}   id 用户主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.show = function(id,cb) {
	daoModule.show("UserModel",id,cb);
}

/**
 * 更新用户信息
 * 
 * @param  {[type]}   obj 用户对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function(obj,cb) {
	daoModule.update("UserModel",obj.user_id,obj,cb);
}

/**
 * 删除用户对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("UserModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}

/**
 * 保存用户信息
 * 
 * @param  {[type]}   obj 用户对象
 * @param  {Function} cb  回调函数
 */
module.exports.save = function(obj,cb) {
	daoModule.show(obj.user_id,function(err,oldObj){
		if(err) {
			daoModule.create("UserModel",obj,cb);
		} else {
			daoModule.update("UserModel",obj.user_id,obj,cb);
		}
	})
}

/**
 * 获取用户数量
 * 
 * @param  {Function} cb 回调函数
 */
module.exports.count = function(cb) {
	daoModule.count("UserModel",cb);
}