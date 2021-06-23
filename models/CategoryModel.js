module.exports = function(db,callback){
	// 分类模型
	db.define("CategoryModel",{
		id : {type: 'serial', key: true},
		category_id: Number,
		name : String,
		order : Number,
		menu_id : Number
	},{
		table : "nm_category"
	});
	return callback();
}