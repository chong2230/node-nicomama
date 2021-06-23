var path = require("path");
var articleDao = require(path.join(process.cwd(), "dao/ArticleDao"));
// var logger = require("../modules/logger").logger;

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
module.exports.getArticles = function(conditions, cb) {
    if (!conditions.pagenum) return cb("pagenum 参数不合法");
    if (!conditions.pagesize) return cb("pagesize 参数不合法");

    // 通过关键词获取文章数量
	articleDao.countByKey(conditions["query"],function(err,count) {
		var key = conditions["query"];
		var pagenum = parseInt(conditions["pagenum"]);
		var pagesize = parseInt(conditions["pagesize"]);

		var pageCount = Math.ceil(count / pagesize);
		var offset = (pagenum - 1) * pagesize;
		if(offset >= count) {
			offset = count;
		}
		var limit = pagesize;

		articleDao.findByKey(key,offset,limit,function(err,articles){
			var retArticles = [];
			for(var idx in articles) {
				var article = articles[idx];
				retArticles.push({
					"id": article.article_id,
					"name":article.title,
					"desc":article.description,
                    "img":article.img,
                    // "content":article.content,
					// "create_time":article.create_time,
                    // "update_time":article.update_time
				});
			}
			var resultDta = {};
			resultDta["total"] = count;
			resultDta["pagenum"] = pagenum;
			resultDta["list"] = retArticles;
			cb(err,resultDta);
		});
	});
}

/**
 * 通过用户ID获取用户信息
 * 
 * @param  {[type]}   id 用户 ID
 * @param  {Function} cb 回调函数
 */
module.exports.getArticle = function(id, cb) {
    articleDao.show(id, function(err, article) {
        if (err) return cb(err);
        if (!article) return cb('该文章不存在');
        cb(
            null,
            {
                "id": article.article_id,
                "title": article.title,
                "desc": article.description,
                "content": article.content,
                "create_time": article.create_time
            }
        )
    })
}
