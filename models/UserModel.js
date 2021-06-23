module.exports = function(db,callback){
	// 用户模型
	db.define("UserModel",{
		user_id : {type: 'serial', key: true},
		username : String,
		qq_open_id : String,
		password : String,
		user_email : String,
		user_email_code : String,
		is_active : String,
		user_sex : String,
        user_qq : String,
        user_tel : String,
        user_xueli : String,
        user_hobby : String,
        user_introduce : String,
        create_time : Number,
        update_time : Number
	},{
		table : "gt_user"
	});
	return callback();
}