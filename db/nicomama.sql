-- ----------------------------
-- Table structure for nm_article
-- ----------------------------
DROP TABLE IF EXISTS `nm_article`;
CREATE TABLE `nm_article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `title` varchar(64) NOT NULL DEFAULT '' COMMENT '标题',
  `description` varchar(128) NOT NULL DEFAULT '' COMMENT '描述',
  `content` varchar(5000) NOT NULL DEFAULT '' COMMENT '内容',
  `img` varchar(200) NOT NULL COMMENT '展示图片',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  `update_time` int(11) NOT NULL COMMENT '修改时间',
  `category_id` int(11) COMMENT '分类id',
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1200001 DEFAULT CHARSET=utf8 COMMENT='文章表';

-- ----------------------------
-- Records of nm_article
-- ----------------------------
INSERT INTO `nm_article` VALUES (1390742, '警惕！孩子流鼻血不一定是干燥！这几个症状要注意', '一觉醒来床单枕头有血迹，最近好多娃都有这个情况', '随着冷空气渐渐南下，最近的天气也变得越来越干燥凉爽啦。这样的天气大人是很舒服，孩子却遭罪了，最近流鼻血的小孩可越来越多了。这不，前段时间，公司一位同事带娃出去旅行，一早起来，娃的鼻血滴滴答答沾了好多在白色床单上，场面吓人不说，一整天玩耍的兴致也没了。', 'https://staticimg.ngmm365.com/23a7a90ad7e62d514369ab3281ffb722-w1278_h544.jpg?-w1278_h544', '1512033129', '1512033129');
INSERT INTO `nm_article` VALUES (1328430, '鱼身上最不该给娃吃的部位，是这里', '鱼身上的这些部位不要给娃乱吃！', '我们一直都非常推荐给宝宝吃鱼肉，高蛋白、低脂肪，特别是海鱼类还含有较多 Ω-3 不饱和脂肪酸，对于 0 ~ 3 岁还在大脑发育关键期的宝宝来说，真是再好不过的食材了。', 'https://staticimg.ngmm365.com/262c585fc736c57b96938ba88de856d6-w1300_h580.jpg?-w1300_h580', '1512033129', '1512033129');
INSERT INTO `nm_article` VALUES (1284953, '老人带娃，该不该给钱？给多少？', '不能把钱当做衡量的唯一标准，但它一定是最直观、最有效的表达方式。', '前段时间，在朋友圈看到有人感慨，今年中秋早早就开始给住家阿姨准备红包了。一来是感谢阿姨在过去一年的帮助；另一方面也是希望留住她，再战明年', 'https://staticimg.ngmm365.com/8601a78d89dd27fd047c9d85d2639429-w1280_h536.jpg?-w1280_h536', '1512033129', '1512033129');
INSERT INTO `nm_article` VALUES (1282346, '经历试管婴儿的女人，最难熬的是什么？', '每个生命来到世界上都不容易', '罗优群在 1988 年 6 月出生，是中国第三例试管婴儿。他前不久的一则采访视频让人印象深刻，他说，“当时我父母来做试管婴儿成功，简直不是幸运能形容的，比中 500 万还不容易”。', 'https://staticimg.ngmm365.com/b55ab94db6100fe521f7cf6e9d8a4dec-w1280_h540.jpg?-w1280_h540', '1512033129', '1512033129');
INSERT INTO `nm_article` VALUES (1259847, '贫血影响大脑发育，4个月就可以这样补起来', '别再吃红枣菠菜补铁了！', '闺蜜的女儿小桃子十个月了，因为拉肚子几天没好，妈妈就带她去儿童医院做了检查。抽血化验后，拉肚子倒问题不大，却查出了另一个问题——贫血！', 'https://staticimg.ngmm365.com/ebc9286a64e6689e65f577e39868dab4-w1278_h538.jpg?-w1278_h538', '1512033129', '1512033129');
INSERT INTO `nm_article` VALUES (803492, '宝宝爬的姿势不对，会影响以后走路吗？', '宝宝爬的姿势不对，会影响以后走路吗？', '现在，很多家长都意识到，爬，对宝宝来说有多重要。这是好事。不过呢，新手爸妈也很容易因此感到焦虑。', 'https://staticimg.ngmm365.com/4d9b8892cb2e1087c9749d62e423551a-w1200_h800.jpg?-w1200_h800', '1512033129', '1512033129');

-- alter table `nm_article` add `article_category_id` int(11) default 1;
-- alter table `nm_article` change `article_category_id` `category_id` int(11) default 1;

-- ----------------------------
-- Table structure for nm_article_category
-- ----------------------------
-- DROP TABLE IF EXISTS `nm_article_category`;
-- CREATE TABLE `nm_article` (
--   `category_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
--   `name` varchar(64) NOT NULL DEFAULT '' COMMENT '标题',
--   `description` varchar(128) DEFAULT '' COMMENT '描述',
--   PRIMARY KEY (`category_id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='文章分类表';

-- INSERT INTO `nm_article_category` VALUES(1, '推荐');
-- INSERT INTO `nm_article_category` VALUES(2, '喂养指南');
-- INSERT INTO `nm_article_category` VALUES(3, '孕产健康');
-- INSERT INTO `nm_article_category` VALUES(4, '婴儿护理');
-- INSERT INTO `nm_article_category` VALUES(5, '睡眠引导');
-- INSERT INTO `nm_article_category` VALUES(6, '小儿健康');
-- INSERT INTO `nm_article_category` VALUES(7, '亲子陪伴');
-- INSERT INTO `nm_article_category` VALUES(8, '早期发展');
-- INSERT INTO `nm_article_category` VALUES(9, '正面管教');
-- INSERT INTO `nm_article_category` VALUES(10, '漫画吐槽');

-- ----------------------------
-- Table structure for nm_menu
-- ----------------------------
DROP TABLE IF EXISTS `nm_menu`;
CREATE TABLE `nm_menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '标题',
  `order` int(11) default 1 COMMENT '排序',
  `status` int(11) default 1 COMMENT '状态，1显示 0隐藏',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='菜单表';

INSERT INTO `nm_menu` VALUES(1, '首页', 1, 1);
INSERT INTO `nm_menu` VALUES(2, '养娃必读', 2, 0);
INSERT INTO `nm_menu` VALUES(3, '年糕盒子', 3, 1);
INSERT INTO `nm_menu` VALUES(4, '亲子学院', 4, 1);
INSERT INTO `nm_menu` VALUES(5, '关于我们', 5, 1);
INSERT INTO `nm_menu` VALUES(6, '品牌活动', 6, 1);
INSERT INTO `nm_menu` VALUES(7, '联系我们', 7, 1);


-- ----------------------------
-- Table structure for nm_category
-- ----------------------------
DROP TABLE IF EXISTS `nm_category`;
CREATE TABLE `nm_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `category_id` int(11) NOT NULL COMMENT '分类id',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '标题',
  `order` int(11) default 1 COMMENT '排序',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='菜单分类表';

INSERT INTO `nm_category` VALUES(1, 1, '推荐', 1, 1);
INSERT INTO `nm_category` VALUES(2, 2, '喂养指南', 2, 1);
INSERT INTO `nm_category` VALUES(3, 3, '孕产健康', 3, 1);
INSERT INTO `nm_category` VALUES(4, 4, '婴儿护理', 4, 1);
INSERT INTO `nm_category` VALUES(5, 5, '睡眠引导', 5, 1);
INSERT INTO `nm_category` VALUES(6, 6, '小儿健康', 6, 1);
INSERT INTO `nm_category` VALUES(7, 7, '亲子陪伴', 7, 1);
INSERT INTO `nm_category` VALUES(8, 8, '早期发展', 8, 1);
INSERT INTO `nm_category` VALUES(9, 9, '正面管教', 9, 1);
INSERT INTO `nm_category` VALUES(10, 10, '漫画吐槽', 10, 1);
INSERT INTO `nm_category` VALUES(11, 1, '在家早教', 1, 2);
INSERT INTO `nm_category` VALUES(12, 2, '数学思维', 2, 2);
INSERT INTO `nm_category` VALUES(13, 3, '创意拼搭', 3, 2);
INSERT INTO `nm_category` VALUES(14, 1, '磁力拼搭', 1, 3);
INSERT INTO `nm_category` VALUES(15, 2, '思维开发', 2, 3);
INSERT INTO `nm_category` VALUES(16, 3, '逻辑游戏', 3, 3);
INSERT INTO `nm_category` VALUES(17, 4, '科学启蒙', 1, 3);
INSERT INTO `nm_category` VALUES(18, 5, '美国外教', 2, 3);
INSERT INTO `nm_category` VALUES(19, 6, '英语启蒙', 3, 3);
INSERT INTO `nm_category` VALUES(20, 7, '尤克里里', 1, 3);
INSERT INTO `nm_category` VALUES(21, 8, '亲子粘土', 2, 3);

-- ----------------------------
-- Table structure for nm_college
-- ----------------------------
DROP TABLE IF EXISTS `nm_college`;
CREATE TABLE `nm_college` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(64) DEFAULT '' COMMENT '标题',
  `content` varchar(1024) NOT NULL DEFAULT '' COMMENT '内容，图片字符串',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  `category_id` int(11) NOT NULL COMMENT '菜单分类id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='学院表';

INSERT INTO `nm_college` VALUES(1, '在家早教', '/_nuxt/img/1.cf3ed44.png,/_nuxt/img/2.5441c9d.png,/_nuxt/img/3.984a032.png,/_nuxt/img/4.3116f22.png,/_nuxt/img/5.d5d94ef.png,/_nuxt/img/6.e78d196.png,/_nuxt/img/7.11025e9.png,/_nuxt/img/8.bf5ccfc.png,/_nuxt/img/9.379a99a.png,/_nuxt/img/10.c6ef54b.png,/_nuxt/img/11.f020854.png,/_nuxt/img/12.015234a.png,/_nuxt/img/13.af8ed71.png,/_nuxt/img/14.edf7fe2.png,/_nuxt/img/15.b418ac2.png', 2, 1);
INSERT INTO `nm_college` VALUES(2, '数学思维', '/_nuxt/img/1.afe4dbe.png,/_nuxt/img/2.8e53140.png,/_nuxt/img/3.ecaa197.png,/_nuxt/img/4.2ca955a.png,/_nuxt/img/5.ff3987b.png,/_nuxt/img/6.95d97aa.png,/_nuxt/img/7.e1fea4a.png,/_nuxt/img/8.e2f3137.png,/_nuxt/img/9.fdb3348.png,/_nuxt/img/10.a755f07.png,/_nuxt/img/11.47b9106.png', 2, 2);
INSERT INTO `nm_college` VALUES(3, '创意拼搭', '/_nuxt/img/1.ac5d929.png,/_nuxt/img/2.e41cb89.png,/_nuxt/img/3.44b0212.png,/_nuxt/img/4.efa8349.png,/_nuxt/img/5.d16e89d.png,/_nuxt/img/6.f9fceec.png,/_nuxt/img/7.6e99042.gif,/_nuxt/img/8.656156a.png,/_nuxt/img/9.9fe7833.png,/_nuxt/img/10.405a1a9.png,/_nuxt/img/11.fa366ec.gif,/_nuxt/img/12.eb37f83.png,/_nuxt/img/13.6b83801.png,/_nuxt/img/14.5c920a4.gif,/_nuxt/img/15.ddb2b3d.png,/_nuxt/img/16.41a0be0.gif,/_nuxt/img/17.76552e5.png,/_nuxt/img/18.c82bab3.gif,/_nuxt/img/19.cc6afae.png,/_nuxt/img/20.422ce4f.png,/_nuxt/img/21.13cc648.png,/_nuxt/img/22.96eb4c8.png,/_nuxt/img/23.fed7251.png,/_nuxt/img/24.87af76d.png,/_nuxt/img/25.c327f27.png,/_nuxt/img/26.2e28c66.png,/_nuxt/img/27.5b9fb35.png,/_nuxt/img/28.82425df.png,/_nuxt/img/29.7b1b6e6.png', 2, 3);
INSERT INTO `nm_college` VALUES(4, '磁力拼搭', '/_nuxt/img/1.3ed8e6a.png,/_nuxt/img/2.0cb6e70.png,/_nuxt/img/3.fa3b196.png,/_nuxt/img/4.a3db9d6.png,/_nuxt/img/5.29e57d7.png,/_nuxt/img/6.ada7718.png,/_nuxt/img/7.e60c0d5.png,/_nuxt/img/8.41a8984.png,/_nuxt/img/9.cd81fe0.png,/_nuxt/img/10.aedc78c.png', 3, 1);
INSERT INTO `nm_college` VALUES(5, '思维开发', '/_nuxt/img/1.1686aaa.png,/_nuxt/img/2.b59a252.png,/_nuxt/img/3.9135510.png,/_nuxt/img/4.4bab488.png,/_nuxt/img/5.1aa86ef.png,/_nuxt/img/6.18d1711.png,/_nuxt/img/7.1ca67eb.png,/_nuxt/img/8.166cc44.gif,/_nuxt/img/9.4b3ecbc.png,/_nuxt/img/10.3bd61c4.png,/_nuxt/img/11.0b616c1.png,/_nuxt/img/12.9e87dd7.gif,/_nuxt/img/13.47963f0.png,/_nuxt/img/14.c1177df.png,/_nuxt/img/15.d23952e.png', 3, 2);
INSERT INTO `nm_college` VALUES(6, '逻辑游戏', '/_nuxt/img/1.a64ca8d.png,/_nuxt/img/2.95f354b.gif,/_nuxt/img/3.f449a70.gif,/_nuxt/img/4.dc4a751.png,/_nuxt/img/5.1014ff3.png,/_nuxt/img/6.b2cb88e.png,/_nuxt/img/7.d7cf535.gif,/_nuxt/img/8.e76f6bb.png,/_nuxt/img/9.b011a84.png,/_nuxt/img/10.65fded4.png,/_nuxt/img/11.7f7f44b.png', 3, 3);
INSERT INTO `nm_college` VALUES(7, '科学启蒙', '/_nuxt/img/1.04afe17.png,/_nuxt/img/2.f971037.png,/_nuxt/img/3.91df658.png,/_nuxt/img/4.a674fbb.png,/_nuxt/img/5.f3c12b3.png,/_nuxt/img/6.91e7a8a.png,/_nuxt/img/7.7ec8143.png,/_nuxt/img/8.bd258df.png,/_nuxt/img/9.ec15151.png,/_nuxt/img/10.3f58795.png,/_nuxt/img/11.b52dc92.png', 3, 4);
INSERT INTO `nm_college` VALUES(8, '美国外教', '/_nuxt/img/1.42627f6.png,/_nuxt/img/2.64b2096.png,/_nuxt/img/3.9501fd5.png,/_nuxt/img/4.2fee45b.png,/_nuxt/img/5.3cfdffb.png,/_nuxt/img/6.4113a0b.png,/_nuxt/img/7.8307541.png,/_nuxt/img/8.b3e6a4e.gif,/_nuxt/img/9.16db64d.png,/_nuxt/img/10.1b98c27.png,/_nuxt/img/11.ecea0b2.png,/_nuxt/img/12.d7b8279.png,/_nuxt/img/13.5a06844.png', 3, 5);
INSERT INTO `nm_college` VALUES(9, '英语启蒙', '/_nuxt/img/1.e6a22a9.png,/_nuxt/img/2.c7ad625.png,/_nuxt/img/3.891a839.png,/_nuxt/img/4.e0b62d1.png,/_nuxt/img/5.bb4cfeb.png,/_nuxt/img/6.089fc9b.png,/_nuxt/img/7.6ca0604.png,/_nuxt/img/8.25838ae.png', 3, 6);
INSERT INTO `nm_college` VALUES(10, '尤克里里', '/_nuxt/img/1.bbec387.png,/_nuxt/img/2.4ad1140.png,/_nuxt/img/3.f596ccd.gif,/_nuxt/img/4.b214b47.png,/_nuxt/img/5.b775105.png,/_nuxt/img/6.a971635.png,/_nuxt/img/7.16e7627.gif,/_nuxt/img/8.62f2cfd.gif,/_nuxt/img/9.b9aec28.gif,/_nuxt/img/10.f39bb83.png,/_nuxt/img/11.312899e.gif,/_nuxt/img/12.246d9f6.png,/_nuxt/img/13.43e6ae0.gif,/_nuxt/img/14.787663a.png,/_nuxt/img/15.554b9b8.png,/_nuxt/img/16.efb8d31.png,/_nuxt/img/17.ab1e96a.png,/_nuxt/img/18.30f67ea.png', 3, 7);
INSERT INTO `nm_college` VALUES(11, '亲子粘土', '/_nuxt/img/1.a0ce0bb.png,/_nuxt/img/2.468f1f4.png,/_nuxt/img/3.d7a0977.png,/_nuxt/img/4.9762de9.png,/_nuxt/img/5.85fe68d.png,/_nuxt/img/6.c4b2444.png,/_nuxt/img/7.66243f5.png,/_nuxt/img/8.507544c.png', 3, 8);

-- alter table `nm_college` change `title` `name` varchar(64) DEFAULT '';

-- ----------------------------
-- Table structure for gt_user
-- ----------------------------
DROP TABLE IF EXISTS `gt_user`;
CREATE TABLE `gt_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `username` varchar(128) NOT NULL DEFAULT '' COMMENT '登录名',
  `qq_open_id` char(32) DEFAULT NULL COMMENT 'qq官方唯一编号信息',
  `password` char(64) NOT NULL DEFAULT '' COMMENT '登录密码',
  `user_email` varchar(64) NOT NULL DEFAULT '' COMMENT '邮箱',
  `user_email_code` char(13) DEFAULT NULL COMMENT '新用户注册邮件激活唯一校验码',
  `is_active` enum('是','否') DEFAULT '否' COMMENT '新用户是否已经通过邮箱激活帐号',
  `user_sex` enum('保密','女','男') NOT NULL DEFAULT '男' COMMENT '性别',
  `user_qq` varchar(32) NOT NULL DEFAULT '' COMMENT 'qq',
  `user_tel` varchar(32) NOT NULL DEFAULT '' COMMENT '手机',
  `user_xueli` enum('博士','硕士','本科','专科','高中','初中','小学') NOT NULL DEFAULT '本科' COMMENT '学历',
  `user_hobby` varchar(32) NOT NULL DEFAULT '' COMMENT '爱好',
  `user_introduce` text COMMENT '简介',
  `create_time` int(11) NOT NULL COMMENT '创建时间',
  `update_time` int(11) NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='会员表';

-- ----------------------------
-- Records of gt_user
-- ----------------------------
INSERT INTO `gt_user` VALUES ('1', 'zce', null, '$2a$08$lV0Gr4AKx7xH7cCU4KCGCOikNzGPaWIpw9W7A9BONIxoJ2.hGC9qi', 'w@zce.me', '1242d9b5', '否', '男', '', '', '本科', '', null, '1512033129', '1512033129');
INSERT INTO `gt_user` VALUES ('11', 'ww', null, '$2a$08$09nUxs.9czzXc4JZJTOdteeXSd/mxZVg96AhqciGbTMB6cfbGUWC2', 'i@zce.me', 'f9a9d0cc', '是', '女', '1231231211', '12313211', '博士', '123123', '123123123', '1512122098', '1512122098');

-- ----------------------------
-- Table structure for gt_menu
-- ----------------------------
DROP TABLE IF EXISTS `gt_menu`;