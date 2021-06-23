var path = require('path');
var daoModule = require('./Dao');
var databaseModule = require(path.join(process.cwd(), "modules/database"));

/**
 * 创建分类
 * 
 * @param {[type]} obj 分类信息
 * @param {Function} cb 回调函数
 */
module.exports.create = function(obj, cb) {
    daoModule.create("CategoryModel", obj, cb);
}

/**
 * 获取分类列表
 * 
 * @param  {[type]}   conditions 查询条件
 * @param  {Function} cb         回调函数
 */
 module.exports.list = function(conditions,cb) {
	daoModule.list("CategoryModel",conditions,function(err,models) {
		if(err) return cb(err,null);
		cb(null,models);
	});
}

/**
 * 通过查询条件获取分类对象
 * 
 * @param  {[type]}   conditions 条件
 * @param  {Function} cb         回调函数
 */
 module.exports.findOne = function(conditions,cb) {
	daoModule.findOne("CategoryModel",conditions,cb);
}

/**
 * 通过关键词查询分类
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
 module.exports.findByKey = function(key,offset,limit,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT * FROM nm_category as category";

	if(key) {
		sql += " WHERE name LIKE ? LIMIT ?,?";
		database.driver.execQuery(
			sql
		,["%" + key + "%",offset,limit],function(err,categorys){
			if(err) return cb("查询执行出错");
			cb(null,categorys);
		});
	} else {
		sql += " LIMIT ?,? ";
		database.driver.execQuery(sql,[offset,limit],function(err,categorys){
			if(err) return cb("查询执行出错");
			cb(null,categorys);
		});
	}
}

/**
 * 通过菜单id和分类id查询分类
 * 
 * @param  {[type]}   menu_id    菜单id
 * @param  {[type]}   category_id 分类id 
 * @param  {Function} cb     回调函数
 */
 module.exports.findByIds = function(menu_id,category_id,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT * FROM nm_category as category where menu_id=? and category_id=?";
	
	database.driver.execQuery(sql,[menu_id,category_id],function(err,category){
		if(err) return cb("查询执行出错");
		cb(null,category);
	});
}

/**
 * 判断分类是否存在
 * 
 * @param  {[type]}   name    分类名称
 * @param  {Function} cb       回调函数
 * 
 */
module.exports.exists = function(name, cb) {
	var db = databaseModule.getDatabase();
	var Model = db.models.CategoryModel;
	Model.exists({"name": name}, function(err, isExists) {
		if (err) return cb("查询失败");
		cb(null, isExists);
	})
}

/**
 * 模糊查询分类数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
 module.exports.countByKey = function(key,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT count(*) as count FROM nm_category";
	if(key) {
		sql += " WHERE name LIKE ?";
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
 * 通过ID获取分类对象数据
 * 
 * @param  {[type]}   id 分类主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.show = function(id,cb) {
	daoModule.show("CategoryModel",id,cb);
}

/**
 * 更新分类信息
 * 
 * @param  {[type]}   obj 分类对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function(obj,cb) {
	daoModule.update("CategoryModel",obj.id,obj,cb);
}

/**
 * 删除分类对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("CategoryModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}

/**
 * 保存分类信息
 * 
 * @param  {[type]}   obj 分类对象
 * @param  {Function} cb  回调函数
 */
module.exports.save = function(obj,cb) {
	daoModule.show(obj.id,function(err,oldObj){
		if(err) {
			daoModule.create("CategoryModel",obj,cb);
		} else {
			daoModule.update("CategoryModel",obj.id,obj,cb);
		}
	})
}

/**
 * 获取分类数量
 * 
 * @param  {Function} cb 回调函数
 */
module.exports.count = function(cb) {
	daoModule.count("CategoryModel",cb);
}