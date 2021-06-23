var path = require('path');
var daoModule = require('./Dao');
var databaseModule = require(path.join(process.cwd(), "modules/database"));

/**
 * 创建文章
 * 
 * @param {[type]} obj 文章信息
 * @param {Function} cb 回调函数
 */
module.exports.create = function(obj, cb) {
    daoModule.create("ArticleModel", obj, cb);
}

/**
 * 获取用户列表
 * 
 * @param  {[type]}   conditions 查询条件
 * @param  {Function} cb         回调函数
 */
 module.exports.list = function(conditions,cb) {
	daoModule.list("ArticleModel",conditions,function(err,models) {
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
	daoModule.findOne("ArticleModel",conditions,cb);
}

/**
 * 通过关键词查询文章
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
 module.exports.findByKey = function(key,offset,limit,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT * FROM nm_article as article";

	if(key) {
		sql += " WHERE title LIKE ? LIMIT ?,?";
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
 * 判断文章是否存在
 * 
 * @param  {[type]}   title    文章标题
 * @param  {Function} cb       回调函数
 * 
 */
module.exports.exists = function(title, cb) {
	var db = databaseModule.getDatabase();
	var Model = db.models.ArticleModel;
	Model.exists({"title": title}, function(err, isExists) {
		if (err) return cb("查询失败");
		cb(null, isExists);
	})
}

/**
 * 模糊查询文章数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
 module.exports.countByKey = function(key,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT count(*) as count FROM nm_article";
	if(key) {
		sql += " WHERE title LIKE ?";
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
 * 通过ID获取文章对象数据
 * 
 * @param  {[type]}   id 文章主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.show = function(id,cb) {
	daoModule.show("ArticleModel",id,cb);
}

/**
 * 更新用户信息
 * 
 * @param  {[type]}   obj 文章对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function(obj,cb) {
	daoModule.update("ArticleModel",obj.article_id,obj,cb);
}

/**
 * 删除文章对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("ArticleModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}

/**
 * 保存文章信息
 * 
 * @param  {[type]}   obj 文章对象
 * @param  {Function} cb  回调函数
 */
module.exports.save = function(obj,cb) {
	daoModule.show(obj.article_id,function(err,oldObj){
		if(err) {
			daoModule.create("ArticleModel",obj,cb);
		} else {
			daoModule.update("ArticleModel",obj.article_id,obj,cb);
		}
	})
}

/**
 * 获取文章数量
 * 
 * @param  {Function} cb 回调函数
 */
module.exports.count = function(cb) {
	daoModule.count("ArticleModel",cb);
}