/**
 * Created by Administrator on 15-4-29.
 */
var sql=require("./sql/mysql.js");
//获取用户名
exports.getUser=function(req,res){
    var userName=req.session.userName;
    var userId=req.session.userId;
    res.json({"userName":userName,"userId":userId})
};
exports.goodsListId=function(req,res){
    var id=req.query.id;
    sql.selection("select * from t_productsinfo where p_id=?",[id],function(d){
//        console.log(d)
        res.json({'data':d})
    })
};
//检测是否添加购物车
exports.addCartChack=function(req,res){
    var userId=req.body.userId;
    var id=req.body.id;
//    console.log(userId+"  "+id);
    sql.selection("select * from t_shoppingcart where p_id_fk=? and u_id_fk=?",[id,userId],function(d){
        res.json({"data": d.length})
    })
};
//查询评论条数
exports.discussNum=function(req,res){
    var id=req.body.id;
    sql.selection("select * from t_discuss where p_id_fk=?",[id],function(d){
        res.json({"data": d.length})
    })
};
//读取评论信息
exports.discuss=function(req,res){
    var id=req.body.id;
    var pageNum=parseInt(req.body.pageNum);
    var nowPage=(req.body.nowPage-1)*pageNum;

    sql.selection("select u.u_name,u.u_pic,d.d_score,d.d_mainText,d.d_time from " +
        "t_discuss d,t_userinfo u where u.u_id=d.u_id_fk and d.p_id_fk=? order by d.d_id desc limit ?,?",[id,nowPage,pageNum],function(d){
//        console.log(d)
        res.json({"data":d})
    })
};

exports.discussMessage=function(req,res){
    var id=req.body.id;
    var userName=req.body.userName;
    var starsColor=req.body.starsColor;
    var discussMessage=req.body.discussMessage;
    var nowTime=req.body.nowTime;
    sql.selection("select u_id from t_userinfo where u_name=?",[userName],function(d){

        sql.selection("insert into t_discuss(u_id_fk,p_id_fk,d_score,d_mainText,d_time) values(?,?,?,?,?)",[d[0].u_id,id,starsColor,discussMessage,nowTime],function(d){
            res.json({'data':"success"})
        })

    })
};
//添加到购物车
exports.addGoods=function(req,res){
    var userId=req.body.userId;
    var id=req.body.id;
    sql.selection("insert into t_shoppingcart(p_id_fk,u_id_fk) values(?,?)",[id,userId],function(d){
        res.json({'data':"success"})
    })
};