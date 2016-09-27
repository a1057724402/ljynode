/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50022
Source Host           : localhost:3306
Source Database       : shoppinginfo

Target Server Type    : MYSQL
Target Server Version : 50022
File Encoding         : 65001

Date: 2015-05-05 17:47:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_city`
-- ----------------------------
DROP TABLE IF EXISTS `t_city`;
CREATE TABLE `t_city` (
  `id` int(10) NOT NULL auto_increment,
  `city` varchar(20) default NULL,
  `city_prov` int(10) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_city
-- ----------------------------
INSERT INTO `t_city` VALUES ('1', '成都', '1');
INSERT INTO `t_city` VALUES ('2', '广东', '2');

-- ----------------------------
-- Table structure for `t_discuss`
-- ----------------------------
DROP TABLE IF EXISTS `t_discuss`;
CREATE TABLE `t_discuss` (
  `d_id` int(11) NOT NULL auto_increment COMMENT '评论序号',
  `u_id_fk` int(11) default NULL COMMENT '用户ID(外键)',
  `p_id_fk` int(11) default NULL COMMENT '商品ID（外键）',
  `d_score` text COMMENT '评分',
  `d_mainText` text COMMENT '评论内容',
  `d_time` varchar(50) default NULL,
  PRIMARY KEY  (`d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_discuss
-- ----------------------------
INSERT INTO `t_discuss` VALUES ('58', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '发生的发生的', '2015-4-4 13:20');
INSERT INTO `t_discuss` VALUES ('59', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '士大夫撒旦', '2015-4-4 13:20');
INSERT INTO `t_discuss` VALUES ('60', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', 'as的发生的', '2015-4-4 13:20');
INSERT INTO `t_discuss` VALUES ('61', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '速读法', '2015-4-4 13:21');
INSERT INTO `t_discuss` VALUES ('62', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '测试', '2015-4-4 13:25');
INSERT INTO `t_discuss` VALUES ('63', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '测试2', '2015-4-4 13:26');
INSERT INTO `t_discuss` VALUES ('64', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '测试类 4', '2015-4-4 13:43');
INSERT INTO `t_discuss` VALUES ('65', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '测试5', '2015-4-4 13:45');
INSERT INTO `t_discuss` VALUES ('66', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '测试 6', '2015-4-4 13:45');
INSERT INTO `t_discuss` VALUES ('67', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '测试7', '2015-4-4 13:50');
INSERT INTO `t_discuss` VALUES ('68', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '依然测试', '2015-4-4 13:54');
INSERT INTO `t_discuss` VALUES ('69', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '再次测试', '2015-4-4 13:55');
INSERT INTO `t_discuss` VALUES ('70', '7', '1', '\n                <ul>\n                    <li>★</li>\n                    <li>★</li>\n                    <li>★</li>\n                    <li>★</li>\n                    <li>★</li>\n                </ul>\n            ', '大胆测试', '2015-4-4 13:55');
INSERT INTO `t_discuss` VALUES ('71', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '班长在后面', '2015-4-4 13:55');
INSERT INTO `t_discuss` VALUES ('72', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '班长还是在后面', '2015-4-4 13:58');
INSERT INTO `t_discuss` VALUES ('73', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '不好玩那', '2015-4-4 16:29');
INSERT INTO `t_discuss` VALUES ('74', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '凑合', '2015-4-4 16:29');
INSERT INTO `t_discuss` VALUES ('75', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '无聊', '2015-4-4 16:30');
INSERT INTO `t_discuss` VALUES ('76', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '相当无聊', '2015-4-4 16:30');
INSERT INTO `t_discuss` VALUES ('77', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                </ul>\n            ', '实在无聊', '2015-4-4 16:30');
INSERT INTO `t_discuss` VALUES ('78', '7', '1', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', '继续', '2015-4-4 16:33');
INSERT INTO `t_discuss` VALUES ('79', '2', '2', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', 'sdfsdf', '2015-4-5 15:52');
INSERT INTO `t_discuss` VALUES ('80', '2', '4', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', 'sdf', '2015-4-5 15:52');
INSERT INTO `t_discuss` VALUES ('81', '2', '3', '\n                <ul>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(239, 232, 0);\">★</li>\n                    <li style=\"color: rgb(207, 207, 207);\">★</li>\n                </ul>\n            ', 'sdfsdfsdf', '2015-4-5 17:21');

-- ----------------------------
-- Table structure for `t_hots`
-- ----------------------------
DROP TABLE IF EXISTS `t_hots`;
CREATE TABLE `t_hots` (
  `h_id` int(11) NOT NULL auto_increment COMMENT '热门商品序号',
  `p_id_fk` int(11) default NULL COMMENT '商品序号（外键）',
  PRIMARY KEY  (`h_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_hots
-- ----------------------------
INSERT INTO `t_hots` VALUES ('1', '20');
INSERT INTO `t_hots` VALUES ('2', '21');
INSERT INTO `t_hots` VALUES ('3', '24');
INSERT INTO `t_hots` VALUES ('4', '29');
INSERT INTO `t_hots` VALUES ('5', '32');
INSERT INTO `t_hots` VALUES ('6', '25');

-- ----------------------------
-- Table structure for `t_lastproducts`
-- ----------------------------
DROP TABLE IF EXISTS `t_lastproducts`;
CREATE TABLE `t_lastproducts` (
  `l_id` int(11) NOT NULL auto_increment COMMENT '最新商品ID',
  `p_id_fk` int(11) default NULL COMMENT '商品信息ID（外键）',
  PRIMARY KEY  (`l_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_lastproducts
-- ----------------------------
INSERT INTO `t_lastproducts` VALUES ('1', '2');
INSERT INTO `t_lastproducts` VALUES ('2', '3');
INSERT INTO `t_lastproducts` VALUES ('3', '9');

-- ----------------------------
-- Table structure for `t_orderlist`
-- ----------------------------
DROP TABLE IF EXISTS `t_orderlist`;
CREATE TABLE `t_orderlist` (
  `o_id` int(11) NOT NULL auto_increment COMMENT '订单序号',
  `o_number` varchar(255) default NULL COMMENT '订单编号',
  `u_id_fk` int(11) default NULL COMMENT '客户序号（外键）',
  `o_address` varchar(255) default NULL COMMENT '发货地址',
  `o_receiver` varchar(255) default NULL COMMENT '收件人',
  `o_tel` varchar(255) default NULL COMMENT '联系方式',
  `p_id` int(11) default NULL COMMENT '商品序号（外键）',
  `o_num` int(11) default NULL COMMENT '需要商品数量',
  PRIMARY KEY  (`o_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_orderlist
-- ----------------------------
INSERT INTO `t_orderlist` VALUES ('1', '#21430814403645', '2', 'sdfasd', 'gafsef', 'asefasef', '2', '1');
INSERT INTO `t_orderlist` VALUES ('2', '#21430814505814', '2', 'sdfag', 'awefasg', 'sadfasdf', '2', '1');
INSERT INTO `t_orderlist` VALUES ('3', '#21430814555923', '2', 'asdfs', 'asdga', 'fesfeg', '2', '1');
INSERT INTO `t_orderlist` VALUES ('4', '#21430814657601', '2', 'sadfasg', 'awefa', 'zsdfseg', '2', '1');
INSERT INTO `t_orderlist` VALUES ('5', '#21430814903309', '2', 'sadfa', 'adfasg', 'sefaseg', '2', '1');
INSERT INTO `t_orderlist` VALUES ('6', '#21430814953136', '2', 'asdf', 'asd', 'asdf', '2', '1');
INSERT INTO `t_orderlist` VALUES ('7', '#21430815336700', '2', 'asdf', 'asdf', 'sdfs', '2', '1');
INSERT INTO `t_orderlist` VALUES ('8', '#21430815873144', '2', 'asdfsdf', 'sdfsdf', 'sdfsdfsd', '2', '1');
INSERT INTO `t_orderlist` VALUES ('9', '#21430817224662', '2', 'sdfsdf', 'sdfsdf', 'sdfsdfsdf', '8', '1');
INSERT INTO `t_orderlist` VALUES ('10', '#21430817726474', '2', 'sdfsdf', 'sdfsdf', 'sdfsdf', '2', '1');
INSERT INTO `t_orderlist` VALUES ('11', '#21430818385751', '2', 'sdfs', 'dfsdf', 'sdfsdf', '2', '1');

-- ----------------------------
-- Table structure for `t_productsinfo`
-- ----------------------------
DROP TABLE IF EXISTS `t_productsinfo`;
CREATE TABLE `t_productsinfo` (
  `p_id` int(11) NOT NULL auto_increment COMMENT '商品序号',
  `p_name` varchar(255) default NULL COMMENT '商品名',
  `p_shortInfo` varchar(255) default NULL COMMENT '商品简介',
  `p_price` int(11) default NULL COMMENT '商品价格',
  `p_mainInfo` text COMMENT '商品详细信息',
  `p_listImg` varchar(255) default NULL COMMENT '商品图标',
  `p_mainImg` varchar(255) default NULL COMMENT '商品主要图片（用于在搜索列表中显示）',
  `p_allImg` text COMMENT '商品所用图片的路径',
  PRIMARY KEY  (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_productsinfo
-- ----------------------------
INSERT INTO `t_productsinfo` VALUES ('1', '法国红酒', '来自于法国', '52', '来自与法国醇正的法国庄园红酒味美香甜入口即化', './img/proimg/1.jpg', './img/proimg/1.jpg', './img/proimg/1.jpg,./img/proimg/1.jpg,./img/proimg/1.jpg');
INSERT INTO `t_productsinfo` VALUES ('2', '美国红酒', '来自于美国', '183', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/2.jpg', './img/proimg/2.jpg', './img/proimg/2.jpg,./img/proimg/2.jpg,./img/proimg/2.jpg');
INSERT INTO `t_productsinfo` VALUES ('3', '波兰红酒', '来自于波兰', '52', '来自与波兰醇正的波兰庄园红酒味美香甜入口即化', './img/proimg/3.jpg', './img/proimg/3.jpg', './img/proimg/4.jpg,./img/proimg/3.jpg,./img/proimg/3.jpg');
INSERT INTO `t_productsinfo` VALUES ('4', '俄罗斯红酒', '来自于俄罗斯', '195', '来自与俄罗斯醇正的俄罗斯庄园红酒味美香甜入口即化', './img/proimg/4.jpg', './img/proimg/4.jpg', './img/proimg/4.jpg,./img/proimg/4.jpg,./img/proimg/4.jpg');
INSERT INTO `t_productsinfo` VALUES ('5', '瑞典红酒', '来自于瑞典', '760', '来自与瑞典醇正的瑞典庄园红酒味美香甜入口即化', './img/proimg/5.jpg', './img/proimg/5.jpg', './img/proimg/5.jpg,./img/proimg/5.jpg,./img/proimg/5.jpg');
INSERT INTO `t_productsinfo` VALUES ('6', '美国红酒', '来自于美国', '170', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/6.jpg', './img/proimg/6.jpg', './img/proimg/6.jpg,./img/proimg/6.jpg,./img/proimg/6.jpg');
INSERT INTO `t_productsinfo` VALUES ('7', '美国红酒', '拉菲83', '8000', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/7.jpg', './img/proimg/7.jpg', './img/proimg/7.jpg,./img/proimg/7.jpg,./img/proimg/7.jpg');
INSERT INTO `t_productsinfo` VALUES ('8', '波尔多红酒', '选自大自然的葡萄', '170', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/8.jpg', './img/proimg/8.jpg', './img/proimg/8.jpg,./img/proimg/8.jpg,./img/proimg/8.jpg');
INSERT INTO `t_productsinfo` VALUES ('9', '自然牌红酒', '来自于美国', '120', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/9.jpg', './img/proimg/9.jpg', './img/proimg/9.jpg,./img/proimg/9.jpg,./img/proimg/9.jpg');
INSERT INTO `t_productsinfo` VALUES ('10', '葡萄牙', '葡萄牙红酒', '170', '入口有种涩涩的感觉', './img/proimg/10.jpg', './img/proimg/10.jpg', './img/proimg/10.jpg,./img/proimg/10.jpg,./img/proimg/10.jpg');
INSERT INTO `t_productsinfo` VALUES ('11', '美国红酒', '来自于美国', '170', '美国的红酒', './img/proimg/11.jpg', './img/proimg/11.jpg', './img/proimg/11.jpg,./img/proimg/11.jpg,./img/proimg/11.jpg');
INSERT INTO `t_productsinfo` VALUES ('12', '红酒', '来自于美国', '190', '百年历史品质奢华', './img/proimg/12.jpg', './img/proimg/12.jpg', './img/proimg/12.jpg,./img/proimg/12.jpg,./img/proimg/12.jpg');
INSERT INTO `t_productsinfo` VALUES ('13', '不列颠红酒', '来自于英国', '170', '百年品质传承经典', './img/proimg/13.jpg', './img/proimg/13.jpg', './img/proimg/13.jpg,./img/proimg/13.jpg,./img/proimg/13.jpg');
INSERT INTO `t_productsinfo` VALUES ('14', '味美红酒', '来自于美国大品牌', '80', '来自与美国醇正的美国庄园红酒味美香甜', './img/proimg/14.jpg', './img/proimg/14.jpg', './img/proimg/14.jpg,./img/proimg/14.jpg,./img/proimg/14.jpg');
INSERT INTO `t_productsinfo` VALUES ('15', '美国红酒', '来自于美国', '83', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/15.jpg', './img/proimg/15.jpg', './img/proimg/15.jpg,./img/proimg/15.jpg,./img/proimg/15.jpg');
INSERT INTO `t_productsinfo` VALUES ('16', '波兰乡村红酒品牌', '来自于美国', '84', '源自大自然的葡萄酒', './img/proimg/16.jpg', './img/proimg/16.jpg', './img/proimg/16.jpg,./img/proimg/16.jpg,./img/proimg/16.jpg');
INSERT INTO `t_productsinfo` VALUES ('17', '波兰红酒', '来自与波兰', '90', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/18.jpg', './img/proimg/18.jpg', './img/proimg/18.jpg,./img/proimg/18.jpg,./img/proimg/18.jpg');
INSERT INTO `t_productsinfo` VALUES ('18', '美国红酒', '来自于美国', '150', '来自与美国醇正的美国庄园红酒', './img/proimg/19.jpg', './img/proimg/19.jpg', './img/proimg/19.jpg,./img/proimg/19.jpg,./img/proimg/19.jpg');
INSERT INTO `t_productsinfo` VALUES ('19', '莱阳红酒', '来自于美国', '170', '来自与美国醇正的美国庄园红酒味', './img/proimg/20.jpg', './img/proimg/20.jpg', './img/proimg/20.jpg,./img/proimg/20.jpg,./img/proimg/20.jpg');
INSERT INTO `t_productsinfo` VALUES ('20', '大红袍牌红酒', '来自于美国', '180', '来自与美国醇正的美国庄园红酒', './img/proimg/21.jpg', './img/proimg/21.jpg', './img/proimg/21.jpg,./img/proimg/21.jpg,./img/proimg/21.jpg');
INSERT INTO `t_productsinfo` VALUES ('21', '德国红酒', '来自于德国', '170', '来自与法国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/23.jpg', './img/proimg/23.jpg', './img/proimg/23.jpg,./img/proimg/23.jpg,./img/proimg/23.jpg');
INSERT INTO `t_productsinfo` VALUES ('22', '波尔多红酒', '来自于法国', '130', '来自与法国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/24.jpg', './img/proimg/24.jpg', './img/proimg/24.jpg,./img/proimg/24.jpg,./img/proimg/24.jpg');
INSERT INTO `t_productsinfo` VALUES ('23', '波尔多红酒', '来自于法国', '130', '来自与法国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/26.jpg', './img/proimg/26.jpg', './img/proimg/26.jpg,./img/proimg/26.jpg,./img/proimg/26.jpg');
INSERT INTO `t_productsinfo` VALUES ('24', '王彪牌红酒', '来自于中国', '170', '来自与美国醇正的美国庄园红酒味美香甜入口即化', './img/proimg/25.jpg', './img/proimg/25.jpg', './img/proimg/25.jpg,./img/proimg/25.jpg,./img/proimg/25.jpg');
INSERT INTO `t_productsinfo` VALUES ('25', '王牌红酒', '来自于美国', '170', '来自与美国醇正的美国庄园红酒香气浓郁', './img/proimg/27.jpg', './img/proimg/27.jpg', './img/proimg/27.jpg,./img/proimg/27.jpg,./img/proimg/27.jpg');
INSERT INTO `t_productsinfo` VALUES ('26', '庄园红酒', '来自于美国', '24', '味美香甜如果即化', './img/proimg/28.jpg', './img/proimg/28.jpg', './img/proimg/28.jpg,./img/proimg/28.jpg,./img/proimg/28.jpg');
INSERT INTO `t_productsinfo` VALUES ('27', '美国红酒', '来自于美国', '120', '我们不制造酒我们只是大自然的搬运工', './img/proimg/29.jpg', './img/proimg/29.jpg', './img/proimg/29.jpg,./img/proimg/29.jpg,./img/proimg/29.jpg');
INSERT INTO `t_productsinfo` VALUES ('28', '美国红酒', '来自于美国', '9999', '我们不制造酒我们只是大自然的搬运工', './img/proimg/30.jpg', './img/proimg/30.jpg', './img/proimg/30.jpg,./img/proimg/30.jpg,./img/proimg/30.jpg');
INSERT INTO `t_productsinfo` VALUES ('29', '美国红酒', '来自于美国', '888', '我们不制造酒我们只是大自然的搬运工', './img/proimg/31.jpg', './img/proimg/31.jpg', './img/proimg/31.jpg,./img/proimg/31.jpg,./img/proimg/31.jpg');
INSERT INTO `t_productsinfo` VALUES ('30', '美国红酒', '来自于美国', '688', '我们不制造酒我们只是大自然的搬运工', './img/proimg/34.jpg', './img/proimg/34.jpg', './img/proimg/34.jpg,./img/proimg/34.jpg,./img/proimg/34.jpg');
INSERT INTO `t_productsinfo` VALUES ('31', '美国红酒', '来自于美国', '499', '我们不制造酒我们只是大自然的搬运工', './img/proimg/35.jpg', './img/proimg/35.jpg', './img/proimg/35.jpg,./img/proimg/35.jpg,./img/proimg/35.jpg');
INSERT INTO `t_productsinfo` VALUES ('32', '美国红酒', '来自于美国', '169', '我们不制造酒我们只是大自然的搬运工', './img/proimg/36.jpg', './img/proimg/36.jpg', './img/proimg/36.jpg,./img/proimg/36.jpg,./img/proimg/36.jpg');
INSERT INTO `t_productsinfo` VALUES ('33', '美国红酒', '来自于美国', '148', '我们不制造酒我们只是大自然的搬运工', './img/proimg/37.jpg', './img/proimg/37.jpg', './img/proimg/37.jpg,./img/proimg/37.jpg,./img/proimg/37.jpg');
INSERT INTO `t_productsinfo` VALUES ('34', '美国红酒', '来自于美国', '120', '我们不制造酒我们只是大自然的搬运工', './img/proimg/38.jpg', './img/proimg/38.jpg', './img/proimg/6.jpg,./img/proimg/38.jpg,./img/proimg/38.jpg');
INSERT INTO `t_productsinfo` VALUES ('35', '美国红酒', '来自于美国', '666', '我们不制造酒我们只是大自然的搬运工', './img/proimg/39.jpg', './img/proimg/39.jpg', './img/proimg/39.jpg,./img/proimg/39.jpg,./img/proimg/39.jpg');
INSERT INTO `t_productsinfo` VALUES ('36', '美国红酒', '来自于美国', '170', '我们不制造酒我们只是大自然的搬运工', './img/proimg/40.jpg', './img/proimg/40.jpg', './img/proimg/40.jpg,./img/proimg/40.jpg,./img/proimg/40.jpg');
INSERT INTO `t_productsinfo` VALUES ('37', '美国红酒', '来自于美国', '888', '我们不制造酒我们只是大自然的搬运工', './img/proimg/41.jpg', './img/proimg/41.jpg', './img/proimg/41.jpg,./img/proimg/41.jpg,./img/proimg/41.jpg');
INSERT INTO `t_productsinfo` VALUES ('38', '美国红酒', '来自于美国', '670', '我们不制造酒我们只是大自然的搬运工', './img/proimg/42.jpg', './img/proimg/42.jpg', './img/proimg/42.jpg,./img/proimg/42.jpg,./img/proimg/42.jpg');
INSERT INTO `t_productsinfo` VALUES ('39', '美国红酒', '来自于美国', '512', '我们不制造酒我们只是大自然的搬运工', './img/proimg/43.jpg', './img/proimg/43.jpg', './img/proimg/43.jpg,./img/proimg/43.jpg,./img/proimg/43.jpg');
INSERT INTO `t_productsinfo` VALUES ('40', '美国红酒', '来自于美国', '150', '我们不制造酒我们只是大自然的搬运工', './img/proimg/44.jpg', './img/proimg/44.jpg', './img/proimg/44.jpg,./img/proimg/44.jpg,./img/proimg/44.jpg');
INSERT INTO `t_productsinfo` VALUES ('41', '美国红酒', '来自于美国', '520', '我们不制造酒我们只是大自然的搬运工', './img/proimg/45.jpg', './img/proimg/45.jpg', './img/proimg/45.jpg,./img/proimg/45.jpg,./img/proimg/45.jpg');
INSERT INTO `t_productsinfo` VALUES ('42', '美国红酒', '来自于美国', '912', '我们不制造酒我们只是大自然的搬运工', './img/proimg/46.jpg', './img/proimg/46.jpg', './img/proimg/46.jpg,./img/proimg/46.jpg,./img/proimg/46.jpg');
INSERT INTO `t_productsinfo` VALUES ('43', '美国红酒', '来自于美国', '988', '我们不制造酒我们只是大自然的搬运工', './img/proimg/47.jpg', './img/proimg/47.jpg', './img/proimg/47.jpg,./img/proimg/47.jpg,./img/proimg/47.jpg');
INSERT INTO `t_productsinfo` VALUES ('44', '美国红酒', '来自于美国', '998', '我们不制造酒我们只是大自然的搬运工', './img/proimg/48.jpg', './img/proimg/48.jpg', './img/proimg/48.jpg,./img/proimg/48.jpg,./img/proimg/48.jpg');
INSERT INTO `t_productsinfo` VALUES ('45', '美国红酒', '来自于美国', '998', '我们不制造酒我们只是大自然的搬运工', './img/proimg/49.jpg', './img/proimg/49.jpg', './img/proimg/49.jpg,./img/proimg/49.jpg,./img/proimg/49.jpg');
INSERT INTO `t_productsinfo` VALUES ('46', '美国红酒', '来自于美国', '998', '我们不制造酒我们只是大自然的搬运工', './img/proimg/50.jpg', './img/proimg/50.jpg', './img/proimg/50.jpg,./img/proimg/50.jpg,./img/proimg/50.jpg');

-- ----------------------------
-- Table structure for `t_province`
-- ----------------------------
DROP TABLE IF EXISTS `t_province`;
CREATE TABLE `t_province` (
  `id` int(10) NOT NULL auto_increment,
  `province` varchar(20) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_province
-- ----------------------------
INSERT INTO `t_province` VALUES ('1', '四川省');
INSERT INTO `t_province` VALUES ('2', '广东省');

-- ----------------------------
-- Table structure for `t_shoppingcart`
-- ----------------------------
DROP TABLE IF EXISTS `t_shoppingcart`;
CREATE TABLE `t_shoppingcart` (
  `s_id` int(11) NOT NULL auto_increment COMMENT '购物车序号',
  `p_id_fk` int(11) default NULL COMMENT '商品序号（外键）',
  `s_num` int(11) default NULL COMMENT '商品数量',
  `u_id_fk` int(11) default NULL COMMENT '客户序号（外键）',
  `s_ifselect` int(11) default '0' COMMENT '是否被选入订单',
  PRIMARY KEY  (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of t_shoppingcart
-- ----------------------------
INSERT INTO `t_shoppingcart` VALUES ('1', '1', null, '1', '0');
INSERT INTO `t_shoppingcart` VALUES ('2', '1', null, '1', '0');
INSERT INTO `t_shoppingcart` VALUES ('5', '2', null, '25', '0');
INSERT INTO `t_shoppingcart` VALUES ('6', '2', null, '20', '0');
INSERT INTO `t_shoppingcart` VALUES ('7', '2', null, '9', '0');
INSERT INTO `t_shoppingcart` VALUES ('9', '8', null, '5', '0');
INSERT INTO `t_shoppingcart` VALUES ('10', '8', null, '9', '0');
INSERT INTO `t_shoppingcart` VALUES ('11', '2', null, '6', '0');
INSERT INTO `t_shoppingcart` VALUES ('12', '2', null, '24', '0');
INSERT INTO `t_shoppingcart` VALUES ('14', '2', null, '3', '0');

-- ----------------------------
-- Table structure for `t_userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `t_userinfo`;
CREATE TABLE `t_userinfo` (
  `u_id` int(11) NOT NULL auto_increment COMMENT '用户序号',
  `u_name` varchar(255) default NULL COMMENT '用户名',
  `u_password` varchar(255) default NULL COMMENT '用户密码',
  `u_email` varchar(255) default NULL COMMENT '用户邮箱',
  `u_portrait` varchar(255) default NULL,
  `u_phone` varchar(20) default NULL,
  `u_gender` varchar(20) default NULL,
  `u_pic` varchar(255) default NULL,
  `u_addr` varchar(255) default NULL,
  PRIMARY KEY  (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_userinfo
-- ----------------------------
INSERT INTO `t_userinfo` VALUES ('1', ' 在疯中', 'admin', 'admin@qq.com', '21.jpg', '123123123123', '男', null, 'fdsfds,四川省fdsfds,fdsfd;熊鑫鑫,四川省成都市金牛区,110,默认地址;第三方,四川省范德萨,奋斗三翻四复但是;第三方,四川省范德萨,奋斗三翻四复但是');
INSERT INTO `t_userinfo` VALUES ('2', 'zhangsan', 'aaaaaa', 'zs@qq.com', '21_v.jpg', '13246789', null, null, null);
INSERT INTO `t_userinfo` VALUES ('3', 'lisi', 'aaaaaa', 'lisi@qq.com', '21.jpg', null, null, null, null);
INSERT INTO `t_userinfo` VALUES ('4', 'lisi1', 'aaaaaa', 'lisi1@qq.com', '21.jpg', null, null, null, null);
INSERT INTO `t_userinfo` VALUES ('5', 'lisi2', 'aaaaaa', 'lisi2@qq.com', '21.jpg', null, null, null, null);
INSERT INTO `t_userinfo` VALUES ('6', 'jh', null, null, null, null, null, null, '2015-05-04 10:09:52');
INSERT INTO `t_userinfo` VALUES ('7', '风中', null, null, null, null, null, null, null);
INSERT INTO `t_userinfo` VALUES ('8', 'zhangsan', '123456', 'zs@qq.com', null, '13246789', null, null, null);
INSERT INTO `t_userinfo` VALUES ('9', 'zhangsan', 'ssssss', 'zs@163.com', null, null, null, null, null);
