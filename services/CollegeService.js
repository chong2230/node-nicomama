var path = require("path");
var collegeDao = require(path.join(process.cwd(), "dao/CollegeDao"));
// var logger = require("../modules/logger").logger;

/**
 * 获取所有学院
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
module.exports.getColleges = function(conditions, cb) {
    if (!conditions.pagenum) return cb("pagenum 参数不合法");
    if (!conditions.pagesize) return cb("pagesize 参数不合法");

    // 通过关键词获取学院数量
	collegeDao.countByKey(conditions["query"],function(err,count) {
		var key = conditions["query"];
		var pagenum = parseInt(conditions["pagenum"]);
		var pagesize = parseInt(conditions["pagesize"]);

		var pageCount = Math.ceil(count / pagesize);
		var offset = (pagenum - 1) * pagesize;
		if(offset >= count) {
			offset = count;
		}
		var limit = pagesize;

		collegeDao.findByKey(key,offset,limit,function(err,colleges){
			var retColleges = [];
			for(var idx in colleges) {
				var college = colleges[idx];
				retColleges.push({
					"id": college.id,
					"category_id": college.category_id,
					"name":college.name,
					"order":college.order,
					"menu_id":college.menu_id
				});
			}
			var resultDta = {};
			resultDta["total"] = count;
			resultDta["pagenum"] = pagenum;
			resultDta["list"] = retColleges;
			cb(err,resultDta);
		});
	});
}

/**
 * 通过菜单id和分类id获取学院信息
 * 
 * @param  {[type]}   menu_id 菜单id
 * @param  {[type]}   category_id 分类id
 * @param  {Function} cb 回调函数
 */
 module.exports.getCollegeByIds = function(menu_id, category_id, cb) {
    collegeDao.findByIds(menu_id, category_id, function(err, colleges) {
        if (err) return cb(err);
		let college = colleges[0];
        if (!college) return cb('该学院不存在');
        cb(
            null,
            {
                "id": college.id,
				"category_id": college.category_id,
                "name": college.name,
                "content": college.content,
                "menu_id": college.menu_id
            }
        )
    })
}

/**
 * 通过学院ID获取学院信息
 * 
 * @param  {[type]}   id 学院 ID
 * @param  {Function} cb 回调函数
 */
module.exports.getCollege = function(id, cb) {
    collegeDao.show(id, function(err, college) {
        if (err) return cb(err);
        if (!college) return cb('该学院不存在');
        cb(
            null,
            {
                "id": college.id,
				"category_id": college.category_id,
                "name": college.name,
                "content": college.content,
                "menu_id": college.menu_id
            }
        )
    })
}
