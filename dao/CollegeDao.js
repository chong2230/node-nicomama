var path = require('path');
var daoModule = require('./Dao');
var databaseModule = require(path.join(process.cwd(), "modules/database"));

/**
 * 创建学院
 * 
 * @param {[type]} obj 学院信息
 * @param {Function} cb 回调函数
 */
module.exports.create = function(obj, cb) {
    daoModule.create("CollegeModel", obj, cb);
}

/**
 * 获取学院列表
 * 
 * @param  {[type]}   conditions 查询条件
 * @param  {Function} cb         回调函数
 */
 module.exports.list = function(conditions,cb) {
	daoModule.list("CollegeModel",conditions,function(err,models) {
		if(err) return cb(err,null);
		cb(null,models);
	});
}

/**
 * 通过查询条件获取学院对象
 * 
 * @param  {[type]}   conditions 条件
 * @param  {Function} cb         回调函数
 */
 module.exports.findOne = function(conditions,cb) {
	daoModule.findOne("CollegeModel",conditions,cb);
}

/**
 * 通过关键词查询学院
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
 module.exports.findByKey = function(key,offset,limit,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT * FROM nm_college as college";

	if(key) {
		sql += " WHERE name LIKE ? LIMIT ?,?";
		database.driver.execQuery(
			sql
		,["%" + key + "%",offset,limit],function(err,colleges){
			if(err) return cb("查询执行出错");
			cb(null,colleges);
		});
	} else {
		sql += " LIMIT ?,? ";
		database.driver.execQuery(sql,[offset,limit],function(err,colleges){
			if(err) return cb("查询执行出错");
			cb(null,colleges);
		});
	}
}

/**
 * 通过菜单id和分类id查询学院
 * 
 * @param  {[type]}   menu_id    菜单id
 * @param  {[type]}   category_id 分类id 
 * @param  {Function} cb     回调函数
 */
 module.exports.findByIds = function(menu_id,category_id,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT * FROM nm_college as college where menu_id=? and category_id=?";
	console.log(sql);
	
	database.driver.execQuery(sql,[menu_id,category_id],function(err,college){
		if(err) return cb("查询执行出错");
		cb(null,college);
	});
}

/**
 * 判断学院是否存在
 * 
 * @param  {[type]}   name    学院名称
 * @param  {Function} cb       回调函数
 * 
 */
module.exports.exists = function(name, cb) {
	var db = databaseModule.getDatabase();
	var Model = db.models.CollegeModel;
	Model.exists({"name": name}, function(err, isExists) {
		if (err) return cb("查询失败");
		cb(null, isExists);
	})
}

/**
 * 模糊查询学院数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
 module.exports.countByKey = function(key,cb) {
	var db = databaseModule.getDatabase();
	var sql = "SELECT count(*) as count FROM nm_college";
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
 * 通过ID获取学院对象数据
 * 
 * @param  {[type]}   id 学院主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.show = function(id,cb) {
	daoModule.show("CollegeModel",id,cb);
}

/**
 * 更新学院信息
 * 
 * @param  {[type]}   obj 学院对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function(obj,cb) {
	daoModule.update("CollegeModel",obj.id,obj,cb);
}

/**
 * 删除学院对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("CollegeModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}

/**
 * 保存学院信息
 * 
 * @param  {[type]}   obj 学院对象
 * @param  {Function} cb  回调函数
 */
module.exports.save = function(obj,cb) {
	daoModule.show(obj.id,function(err,oldObj){
		if(err) {
			daoModule.create("CollegeModel",obj,cb);
		} else {
			daoModule.update("CollegeModel",obj.id,obj,cb);
		}
	})
}

/**
 * 获取学院数量
 * 
 * @param  {Function} cb 回调函数
 */
module.exports.count = function(cb) {
	daoModule.count("CollegeModel",cb);
}