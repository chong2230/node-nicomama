module.exports = function(db,callback){
	// 用户模型
	db.define("ArticleModel",{
		article_id : {type: 'serial', key: true},
		title : String,
		description : String,
		content : String,
		img : String,
		create_time : Number,
        update_time : Number
	},{
		table : "nm_article"
	});
	return callback();
}