var path = require("path");
var categoryDao = require(path.join(process.cwd(), "dao/CategoryDao"));
// var logger = require("../modules/logger").logger;

/**
 * 获取所有分类
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
module.exports.getCategorys = function(conditions, cb) {
    if (!conditions.pagenum) return cb("pagenum 参数不合法");
    if (!conditions.pagesize) return cb("pagesize 参数不合法");

    // 通过关键词获取分类数量
	categoryDao.countByKey(conditions["query"],function(err,count) {
		var key = conditions["query"];
		var pagenum = parseInt(conditions["pagenum"]);
		var pagesize = parseInt(conditions["pagesize"]);

		var pageCount = Math.ceil(count / pagesize);
		var offset = (pagenum - 1) * pagesize;
		if(offset >= count) {
			offset = count;
		}
		var limit = pagesize;

		categoryDao.findByKey(key,offset,limit,function(err,categorys){
			var retCategorys = [];
			for(var idx in categorys) {
				var category = categorys[idx];
				retCategorys.push({
					"id": category.id,
					"category_id": category.category_id,
					"name":category.name,
					"order":category.order,
					"menu_id":category.menu_id
				});
			}
			var resultDta = {};
			resultDta["total"] = count;
			resultDta["pagenum"] = pagenum;
			resultDta["list"] = retCategorys;
			cb(err,resultDta);
		});
	});
}

/**
 * 通过菜单id和分类id获取分类信息
 * 
 * @param  {[type]}   menu_id 菜单id
 * @param  {[type]}   category_id 分类id
 * @param  {Function} cb 回调函数
 */
 module.exports.getCategoryByIds = function(menu_id, category_id, cb) {
    categoryDao.findByIds(menu_id, category_id, function(err, category) {
        if (err) return cb(err);
        if (!category) return cb('该分类不存在');
        cb(
            null,
            {
                "id": category.id,
				"category_id": category.category_id,
                "name": category.name,
                "order": category.order,
                "menu_id": category.menu_id
            }
        )
    })
}

/**
 * 通过分类ID获取分类信息
 * 
 * @param  {[type]}   id 分类 ID
 * @param  {Function} cb 回调函数
 */
module.exports.getCategory = function(id, cb) {
    categoryDao.show(id, function(err, category) {
        if (err) return cb(err);
        if (!category) return cb('该分类不存在');
        cb(
            null,
            {
                "id": category.id,
				"category_id": category.category_id,
                "name": category.name,
                "order": category.order,
                "menu_id": category.menu_id
            }
        )
    })
}
