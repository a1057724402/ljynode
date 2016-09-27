
/*
 * GET home page.
 */
//var sql=require("./sql/mysql.js")
//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

var db = require("../commonjs/database");

//最新商品展示
exports.lastProducts = function(req,res){
    var con = db.getCon();
    var string="SELECT a.p_id,a.p_name,a.p_maininfo,a.p_allimg from t_productsinfo a RIGHT JOIN t_lastproducts b on  a.p_id=b.p_id_fk"

    con.query(string,function(err,data){
        res.json({mag:data})

    });
    con.end();
}
//最热门商品

exports.hotsProducts = function(req,res){
    var con = db.getCon();
    var string="SELECT a.p_id,a.p_name,p_mainImg from t_hots b left JOIN t_productsinfo a on a.p_id=b.p_id_fk"
    con.query(string,function(err,data){

        res.json({mag:data})

    });
    con.end();
}
//个人中心
exports.personalCenter = function(req,res){
    res.json({mag:req.session.userName})

}