module.exports = function(db,callback){
	// 分类模型
	db.define("CollegeModel",{
		id : {type: 'serial', key: true},
		name : String,
		content: String,
		menu_id : Number,
		category_id: Number
	},{
		table : "nm_college"
	});
	return callback();
}